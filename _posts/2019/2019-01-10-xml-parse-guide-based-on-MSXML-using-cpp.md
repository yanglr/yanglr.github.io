---
layout: post
title: 史上最最靠谱，又双叒叒(ruò,zhuó)简单的基于MSXML的XML解析指南-C++
date: 2019-01-10 18:05:20

categories: 
- [xml, msxml, C++]

tags: [xml, msxml, C++]
excerpt: 大白技术控 - 史上最最靠谱，又双叒叒(ruò,zhuó)简单的基于MSXML的XML解析指南
---

史上最最靠谱且简单的基于MSXML的XML解析指南 - C++版

-------------

最近做C++相关的项目，遇到同时使用COM和MSXML来解析XML文件中信息的问题，这类问题如果做MFC开发也会经常用到。
在网上搜了一整圈，确实很难找到可用的code，总算自己研究出高效而简单的方法，借此机会总结一下，并分享给大家。

附 VS Project镜像: 

SimpleParser4MSXML-cpp: C++语言写的MSXML的简单使用示例, COM 和 MFC 开发中比较常用:

<https://github.com/yanglr/SimpleParser4MSXML-cpp>

点击“Raw”可看到源码，欢迎fork或star~ 

<br>
首先简要列举一下MSXML技术的基本特点。

|                                                           | 基于 COM 的技术，用于处理 Windows 操作系统随附的 XML。 |
| --------------------------------------------------------- | ------------------------------------------------------ |
| [MSXML](https://msdn.microsoft.com/library/ms763742.aspx) | 提供 DOM 本机实现，同时支持 XPath 和 XSLT。            |
|                                                           | 包含 SAX2 基于事件的分析器。                           |



## 流程设计
首先简要介绍一下大概流程:

- 初始化COM
- 创建一个IDOMDocument对象xmlDoc，使用xmlDoc -> load() 或 loadXML()方法读入 XML源
- 调用selectNodes()或者selectSingleNode()函数，选取指定的节点对象。
- 通过IXMLDOMNode对象的属性和方法读取节点对象的内容。
- 通过IXMLDOMNode对象的属性和方法设置节点对象的内容。
- 通过调用xmlDoc -> save()保存XML文件。
- 关闭COM
  <br>

**需要解决的问题:**

- xml信息有哪几种读取形式(xml文件或wchar)
- 如何选取节点，and取节点属性有哪些方法？
- IXMLDOMNode 与 IXMLDOMElement 接口有什么联系和区别?
- 节点如果是数组，怎么操作？
- 如何为属性插入属性
- 字符串的转换
  <br>


# xml信息有哪几种读取形式(xml文件或wchar)
 - xml文件
  从文件中导入xml内容，使用url或filePath
```cpp
VARIANT_BOOL bSuccess = false;
HRESULT hr = iXMLDoc->load(CComVariant(L"./test.xml"), &bSuccess); // 此处的L可以省略
```
当已变量方式传人filePath时，需要使用c_str()函数转换一下，代码如下:
```cpp
VARIANT_BOOL bSuccess = false;
filePath = "./test.xml";
HRESULT hr = iXMLDoc->load(CComVariant(filePath.c_str()), &bSuccess);
```
<br>

 - 已以字符串格式读入的xml完整代码

先定义一个`BSTR`常量
```cpp
const wchar_t *src = L""
L"<?xml version=\"1.0\" encoding=\"utf-16\"?>\r\n"
L"<root desc=\"Great\">\r\n"
L"  <text>Hey</text>\r\n"
L"    <layouts>\r\n"
L"    <lay index=\"15\" bold=\"true\"/>\r\n"
L"    <layoff index=\"12\"/>\r\n"
L"    <layin index=\"17\"/>\r\n"
L"  </layouts>\r\n"
L"</root>\r\n";
```
然后从`BSTR`导入xml内容:
```cpp
VARIANT_BOOL bSuccess = false;
iXMLDoc->loadXML(CComBSTR(src), &bSuccess);
```
注: BSTR字符串是用于COM组件对象模型的字符串格式, 字符串以表示字符串长度的4字节整数开始, 然后跟上UTF-16编码的wchar_t字符串（包括\0结束标志）。BSTR类型的变量是一个指针, 指向字符串的第一个字符处。
<br>
# 如何选取节点，and取节点属性有哪些方法？
- 搜索节点名字
```cpp
CComBSTR sstrRoot(L"root"); // sstrRoot("root");
CComPtr<IXMLDOMNode> rootNode;
HRESULT hr = iXMLDoc->selectSingleNode(sstrRoot, &rootNode);
CComPtr<IXMLDOMNode> textNode;
hr = rootNode->selectSingleNode(CComBSTR(L"text"), &textNode); // 搜索第一个"text"节点
```

# IXMLDOMNode与IXMLDOMElement接口有何联系、区别
IXMLDOMElement接口继承于IXMLDOMNode接口，但除了从IXMLDOMNode接口继承的方法之外，IXMLDOMElement接口还向外暴露以下方法:

| 方法                 | 说明                                     |
| -------------------- | ---------------------------------------- |
| get_tagName          | 检索元素名称（在tag之间的文本）。        |
| getAttribute         | 检索所指定名字的属性的值。               |
| getAttributeNode     | 检索所指定名字的属性的节点               |
| getElementsByTagName | 检索与提供的名称匹配的所有子元素的列表。 |
| removeAttribute      | 移动或替换给定名称的属性                 |
| removeAttributeNode  | 从这个元素中移除指定的属性               |
| setAttribute         | 为给定名称的属性设置值                   |
| setAttributeNode     | 在此元素上添加或替换提供的属性节点。     |

<br>

# 节点如果是数组，怎么操作？
先使用get_childNodes函数获得子节点列表，然后遍历之用get_item依次取出每一项进行处理。
```cpp
	CComPtr<IXMLDOMElement> pRootElement;
	CComPtr<IXMLDOMNodeList> pNodeList;
	pRootElement->get_childNodes(&pNodeList); // Child node list
	long nLen;
	pNodeList->get_length(&nLen);    // Child node list
	for (long index = 0; i != nLen; ++index) // Traverse
	{
		CComPtr<IXMLDOMNode> pCurNode;
		hr = pNodeList->get_item(index, &pCurNode);
		do();  // 此处可做任何你想做的事情
	}
```
<br>

# 如何为属性插入属性
使用Element->setAttribute()即可，具体如下:
```cpp
CComPtr<IXMLDOMElement> imageElement;
xmlDocData->createElement(CComBSTR(L"Image"), &imageElement); // 创建节点"Image"
imageElement->setAttribute(CComBSTR(L"Type"), CComVariant(CComBSTR(imageType.c_str())));  // 添加属性"Type"
```
<br>

# 字符串的转换与输出
- 直接使用`printf`函数+“%ls”或`wprintf`函数+“%s”打印`BSTR`类字符串
```cpp
	CComBSTR ssName;
	printf("Node name:%ls\n", ssName);   // 用%ls打印BSTR字符串内容
	SysFreeString(ssName);               // 用完字符串后必须释放      
```
或
```cpp
	CComBSTR ssName;
	wprintf(L"Node name:%s\n", ssName);   // 这里的L不能省略
	SysFreeString(ssName);
```
 - 将`CComBSTR`类字符串的内容复制到`wstring`中，然后使用`wcout`输出
 ```cpp
	CComBSTR ssName;
	wstring bstrText(ssName);
	wcout << bstrText << endl;
 ```

或 
- 先使用将bstr转为`std::wstring`，然后`wcout`
```cpp
std::wstring wstringName(ssName, SysStringLen(ssName));
wcout << wstringName << endl;
```

- 先将`CComBSTR`类字符串强转为`LPCTSTR`类型后，然后使用`wcout`输出
  对`CStringW`类字符串而言，这已经是一种比较简单的方式了。
 ```cpp
	CComBSTR ssName;
	CString cstring(ssName);
	wcout << (LPCTSTR)cstring << endl;
 ```
- 将`CComBSTR`类字符串的内容复制到`CW2A`类字符串(多字节字符串)中，然后使用`wcout`输出
```cpp
CComBSTR ssName;
CW2A printstr(ssName);
cout << printstr << endl;
```
- 先使用宏W2A将bstr转为std::string，然后cout
```cpp
USES_CONVERSION;
std::string stringName = std::string(W2A(ssName));
cout << stringName << endl;
```

<br>

## 主要代码

```cpp
#include <msxml6.h>   // 含有 MSXML最新版
#include <atlbase.h>
#include "atlstr.h"  // 含有CString, CStringW和CW2A
#include <iostream>  // 包含wcout函数
#include <string>    // 包含 c_str()函数, wcout
#include "comutil.h" // 包含_bstr_t
using namespace std;

const wchar_t *src = L""
L"<?xml version=\"1.0\" encoding=\"utf-16\"?>\r\n"
L"<root desc=\"Great\">\r\n"
L"  <text>Hey</text>\r\n"
L"    <layouts>\r\n"
L"    <lay index=\"15\" bold=\"true\"/>\r\n"
L"    <layoff index=\"12\"/>\r\n"
L"    <layin index=\"17\"/>\r\n"
L"  </layouts>\r\n"
L"</root>\r\n";

int main()
{
	CoInitialize(NULL); // Initialize COM

	CComPtr<IXMLDOMDocument> iXMLDoc;  // Or use CComPtr<IXMLDOMDocument2>, CComPtr<IXMLDOMDocument3>

	try
	{
		HRESULT hr = iXMLDoc.CoCreateInstance(__uuidof(DOMDocument));
		// 	iXMLDoc.CoCreateInstance(__uuidof(DOMDocument60));

		// Load the file. 
		VARIANT_BOOL bSuccess = false;

		// Load it from a url/filename...
		hr = iXMLDoc->load(CComVariant(L"./test.xml"), &bSuccess);
		// filePath = "./test.xml";
		// hr = iXMLDoc->load(CComVariant(filePath.c_str()), &bSuccess);

		// or from a BSTR...
		// iXMLDoc->loadXML(CComBSTR(src), &bSuccess);

		// Get a smart pointer (sp) to the root
		CComPtr<IXMLDOMElement> pRootElement;
		hr = iXMLDoc->get_documentElement(&pRootElement); // Root elements

		// Get Attribute value of the note "root"
		CComBSTR ssDesc("desc");
		CComVariant deVal(VT_EMPTY);
		hr = pRootElement->getAttribute(ssDesc, &deVal);

		CComBSTR sstrRoot(L"root"); // sstrRoot("root");
		CComPtr<IXMLDOMNode> rootNode;
		hr = iXMLDoc->selectSingleNode(sstrRoot, &rootNode);  // Search "root"

		CComBSTR rootText;
		hr = rootNode->get_text(&rootText);
		if (SUCCEEDED(hr))
		{
			wstring bstrText(rootText);
			wcout << "Text of root: " << bstrText << endl;
		}

		CComPtr<IXMLDOMNode> descAttribute;
		hr = rootNode->selectSingleNode(CComBSTR("@desc"), &descAttribute); // Atrribute需要用@, 而各个节点不能使用@作为前缀来搜索
		CComBSTR descVal;
		hr = descAttribute->get_text(&descVal);
		if (SUCCEEDED(hr))
		{
			wstring bstrText(descVal);
			wcout << "Desc Attribute: " << bstrText << endl;
		}

		if (!FAILED(hr))
		{
			wstring strVal;
			if (deVal.vt == VT_BSTR)
				strVal = deVal.bstrVal;

			wcout << "desc: " << strVal << endl;
		}

		CComPtr<IXMLDOMNodeList> pNodeList;
		pRootElement->get_childNodes(&pNodeList); // Child node list
		long nLen;
		pNodeList->get_length(&nLen);    // Child node list
		for (long i = 0; i != nLen; ++i) // Traverse
		{
			CComPtr<IXMLDOMNode> pNode;
			hr = pNodeList->get_item(i, &pNode);

			CComBSTR ssName;
			CComVariant val(VT_EMPTY);
			hr = pNode->get_nodeName(&ssName);
			if (SUCCEEDED(hr))
			{
				wstring bstrText(ssName);
				wcout << "Name of node " << (i + 1) << ": " << bstrText << endl;

				CString cstring(ssName);
				// To display a CStringW correctly, use wcout and cast cstring to (LPCTSTR), an easier way to display wide character strings.
				wcout << (LPCTSTR)cstring << endl;

				// CW2A converts the string in ccombstr to a multi-byte string in printstr, used for display output.
				CW2A printstr(ssName);
				cout << printstr << endl;
			}
		}

		// Add(Append) node
		CComPtr<IXMLDOMDocument>& xmlDocData(iXMLDoc);
		CComPtr<IXMLDOMElement> imageElement;
		CComPtr<IXMLDOMNode> newImageNode;
		string imageType = "jpeg";
		char buffer[MAX_PATH];
		GetCurrentDirectory(MAX_PATH, buffer);  //  Get Current Directory
		string path(buffer); // Copy content of char*, generate a string
		string imagePath = path + "\\com.jpg";

		xmlDocData->createElement(CComBSTR(L"Image"), &imageElement);
		imageElement->setAttribute(CComBSTR(L"Type"), CComVariant(CComBSTR(imageType.c_str()))); // 为当前节点添加属性
		imageElement->setAttribute(CComBSTR(L"FileName"), CComVariant(CComBSTR(imagePath.c_str())));
		rootNode->appendChild(imageElement, &newImageNode);

		// Remove "text" node under "root" node
		CComPtr<IXMLDOMNode> xmlOldNode;
		CComPtr<IXMLDOMNode> textNode;
		hr = rootNode->selectSingleNode(CComBSTR(L"text"), &textNode); // Search "text" node		
		hr = rootNode->removeChild(textNode, &xmlOldNode);

		// Update XML
		hr = iXMLDoc->save(CComVariant("updated.xml"));
	}
	catch (char* pStrErr) {
		// Some error...
		std::cout << pStrErr << std::endl << std::endl;
	} // catch
	catch (...) {
		// Unknown error...
		std::cout << "Unknown error..." << std::endl << std::endl;
	}

	// Release() - that gets done automatically, also can manually do for each opened node or elements.
	// iXMLDoc.Release();

	// Stop COM
	CoUninitialize();

	system("pause");
	return 0;
}
```

运行结果:
![run Result](https://cdn.jsdelivr.net/gh/yanglr/yanglr.github.io/assets/images/public/2019-01-10-run-result.png)



运行完，得到的update.xml内容为:

<https://raw.githubusercontent.com/yanglr/SimpleParser4MSXML-cpp/master/msxmlDemo/updated.xml>

<br>

**参考资料:**
  1. [IXMLDOMElement接口](https://docs.microsoft.com/en-us/previous-versions/windows/desktop/dd874725%28v=vs.85%29)
  2. [Using the MSXML Parser](http://www.endurasoft.com/vcd/msxml1.htm) 
  3. [MFC C++ XML Parse - Using MSXML](https://social.msdn.microsoft.com/Forums/vstudio/en-US/d3fbeea4-fdf9-48f9-9513-42cde8a833d6/mfc-c-xml-parse-using-msxml)
  4. [如何：各种字符串类型之间转换 - Microsoft Docs](https://docs.microsoft.com/zh-cn/cpp/text/how-to-convert-between-various-string-types?view=vs-2017)

<br>

本文原载于本人的CSDN博客:
[史上最最靠谱，又双叒叒(ruò,zhuó)简单的基于MSXML的XML解析指南-C++ - Bravo Yeung-羊较瘦之自留地](https://blog.csdn.net/lzuacm/article/details/86245590)

<hr>

**作者简介**：Bravo Yeung，计算机硕士，知乎干货答主(获**81K** 赞同, **38K** 感谢, **235K** 收藏)。曾在国内 Top3互联网视频直播公司工作过，后加入一家外企做软件开发至今。

<br>

如需转载，请加微信 **iMath7** 申请开白！

<br>

欢迎在留言区留下你的观点，一起讨论提高。如果今天的文章让你有新的启发，学习能力的提升上有新的认识，欢迎转发分享给更多人。

<br>

欢迎各位读者加入 **.NET技术交流群**，在公众号后台回复**“加群”**或者**“学习”**即可。


<br>

![大白技术控 公众号名片](https://images.cnblogs.com/cnblogs_com/enjoy233/1389971/o_gzhCard_for_blog.png)


### 文末彩蛋

> 微信后台回复“**asp**”，给你：一份全网最强的ASP.NET学习路线图。
> <br>
> 回复“**cs**”，给你：一整套 C# 和 WPF 学习资源！
><br>
> 回复“**core**”，给你：2019年dotConf大会上发布的.NET core 3.0学习视频！