---
layout: post
title: ΢��XAML Studio - WPF, Sliverlight, Xamarin, UWP�ȼ��������ߵĸ���
date: 2019-03-21 02:46:04
no-post-nav: true
categories: 
- [wpf, xaml]

sitemap:
  lastmod: 2019-03-21 02:46:04
  priority: 0.7
  changefreq: 'weekly'
  exclude: 'yes'

tags: [wpf]
excerpt: ��׼����� - ΢��XAML Studio - WPF, Sliverlight, Xamarin, UWP�ȼ��������ߵĸ���
---

XAML Studio����������REST����İ�ͦ����~

-------------

������ڼ�������`WPF`����Ŀ������ʹ��`Caliburn.Micro`��`Xceed`���Ѵ��롣ÿ�ε���xaml�ϵ�binding��������Ҫ��ĸϽš�

����·�� [https://channel9.msdn.com/](https://channel9.msdn.com/) ��� `WPF`��ص�ѧϰ��Ƶʱ������΢���Ƽ��������Ƶ - [XAML sutdio���](https://channel9.msdn.com/Shows/On-NET/Introducing-XAML-Studio)��������ʹȻ��Ŀ���Ǻ�Visual Studio Code���ƶ�ǿ���ţţ���ߣ��ͺúÿ�������Ƶ��

![XAML studio](https://ask.qcloudimg.com/http-save/4599976/vc3jimovcp.jpeg)

XAML sutdio��΢��Garageʵ��С�����Ʒ������ɫ��ΪXAML�ṩ������һЩ���ܡ�

**XAML Studio�������¹��ܣ�**

- ʵʱ�ҿɽ�����Ԥ������
- ʵʱ�󶨺͵���
- ���������ı༭��
- �Զ�����ͻָ��ĵ�
- ���ܸ�֪
- �ĵ�������
- ����ָ��
- �����ռ�����

������XAML studio�Ľ�����������ϸ����~

[XAML Studio](https://www.microsoft.com/en-us/garage/profiles/xaml-studio/) ��΢��Garage��Ŀ���һ�������� Visual Studio���ܿ��ٴ���`XAML`UIԭ�͡�ʵʱԤ�����������ݰ󶨼��������๦�ܵ�һ������Ŀ�������°汾�ɴ� [Microsoft Store](https://www.microsoft.com/en-us/p/xaml-studio/9ntls214tkmq?rtc=1&activetab=pivot:overviewtab) ���а�װ��

## �༭������

XAML Studio�ı༭������һ��"������"��Visual Studio��������VS Code����ȸ����ʡ����˱༭���� ����໹���ļ�������Դ�����Ժ͹������⼸��ѡ�

![img](https://ask.qcloudimg.com/http-save/4599976/k2zf1fhkty.png)

�༭������Ϊ����������һ���� �������ڵײ���XAML��ӿؼ�������Ԥ������Ը���������Ӧ��

![img](https://ask.qcloudimg.com/http-save/4599976/n4odyugdt6.gif)

�������ṩ��һ�����������Ŀؼ��б�Ȼ�󵥻��Բ��뵽XAML�С�

![img](https://ask.qcloudimg.com/http-save/4599976/fbnz3s0lh7.gif)

��Visual Studio�е�XAML�༭����ͬ��VS�е�ʵʱԤ�����ṩ�κ����͵��Ϸ����顣

## ����(Դ)����

�����ͨ����̬JSON��JSON REST API�����ݰ󶨵�XAML�����

Ҫ�󶨵���̬JSON�����Ե�������Դ����Ȼ��ֱ���ڱ༭��������JSON���ɡ�

![img](https://ask.qcloudimg.com/http-save/4599976/1a22eqsqt7.png)

Ҫ�󶨵�REST API�����Ե�������Դ��嶥����������ͷ�Դ�һ���ı�������������������REST API�� ����REST API URIȻ�󵥻�ˢ�°�ť��JSON�����£�XAMLԤ��Ҳ�����¡�

![img](https://ask.qcloudimg.com/http-save/4599976/1is6qykkgu.png)

## �������ݰ�

���Թ���������鿴��Щ���ݰ�ʵ�ʳɹ��� �򿪵���ģʽ�������ܹ�������ǰ���Լ����ð󶨵���ʷ��¼��

![img](https://ask.qcloudimg.com/http-save/4599976/r53r9r46yb.gif)

## ΰ��Ŀ�ʼ

�Ҷ�������ߵĵ����е����˷ܡ�  �⿴���ǽ�����VS Code��Monaco�༭���Ļ����Ͽ��������ģ���������ɫ���ṩ��һЩ��ݵĹ��ܡ� �Һ����⿴������İ󶨹��ܣ�����������Ϊ����ʹ���˼���JSON���ݣ������������ھͿ����ṩ�ǳ����İ󶨵��Թ��ܣ�����֪��Ŀǰ��Visual Studio�л�û�ṩ���ֹ��ܡ�

## ������һ��ʵ����

���ڱ༭���д�����һ�������Ĵ���:

```
<Page
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    mc:Ignorable="d">

    <Grid Padding="40">
        <TextBlock>
            <Run FontSize="24" Foreground="#FFFC5185">First demo using XAML Studio</Run><LineBreak/>
            <Run> Hello, Bravo.</Run>
        </TextBlock>
    </Grid>
</Page>
```

�Ϸ�����ͳ����˴���Ԥ��~

![code preview](https://ask.qcloudimg.com/http-save/4599976/i83ifo4ks4.png)

֪��`HTML`���˶�Ӧ��֪������ `<Run>`��ǩ�����ң���ʵ��HTML�е�`<p>`��ǩ�е��񣬳���֮�⣬������XAML���ֺ������ط�һ��~

�ðɣ������������λ����������~

**�ο����ӣ�**

[Microsoft Garage's XAML Studio Does Real-Time UWP UI Changes -- Visual Studio Magazine](https://visualstudiomagazine.com/articles/2019/01/23/xaml-studio.aspx)

[By devs, for devs: meet new Garage projects XAML Studio and Team Retrospectives - Microsoft Garage](https://www.microsoft.com/en-us/garage/blog/2019/01/by-devs-for-devs-meet-new-garage-projects-xaml-studio-and-team-retrospectives/)

<br>

<hr>

��ӭ��������������Ĺ۵㣬һ��������ߡ��������������������µ�������ѧϰ���������������µ���ʶ����ӭת������������ˡ�

<br>

��ӭ��λ���߼��� **.NET��������Ⱥ**���ڹ��ںź�̨�ظ�**����Ⱥ��**����**��ѧϰ��**���ɡ�

<br>

![��׼����� ���ں���Ƭ](https://images.cnblogs.com/cnblogs_com/enjoy233/1389971/o_gzhCard_for_blog.png)


### ��ĩ�ʵ�

> ΢�ź�̨�ظ���**asp**�������㣺һ��ȫ����ǿ��ASP.NETѧϰ·��ͼ��
> <br>
> �ظ���**cs**�������㣺һ���� C# �� WPF ѧϰ��Դ��
><br>
> �ظ���**core**�������㣺2019��dotConf����Ϸ�����.NET core 3.0ѧϰ��Ƶ��
