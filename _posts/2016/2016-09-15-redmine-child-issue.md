---
redirect_from:
  - /2016/09/15/redmine-child-issue/
title: 使用Redmine的PHP API时，如何判断需求是否为原子需求
date: 2016-09-15 15:33:22
categories:
- PHP项目实战
tags: [redmine, php, api]
---

使用redmine的PHP接口时，怎样才能判断需求是否为原子需求呢，下面给出具体的做法:

```php
    /**
     * 判断是否为原子需求, 即是否依然含有子需求
     * @param int $id 需求Id
     * @return int
     */
    public function hasChildIssue($id)
    {
        $res = $this->client->api('issue')->show($id, array('include' => 'children'));
        if (!empty($res) && isset($res['issue']['children'])) {
            return true;
        }
        return false;
    }
```

```php
    set_time_limit(0);
    $startTime = microtime(true);

    //检查API KEY是否配置
    $configService = $this->serviceInstance('config', 'work');
    $config = $configService->getConstApiKey();
    if (empty($config)) {
        throw new \Exception('固定API KEY未配置');
    }
    $constApiKey = $config['value'];
    $redmine = new RedmineLib($constApiKey);

    $issueId=17252;
    $temp = $redmine->client->get('/issues/'.urlencode($issueId).'.json?'.http_build_query(array ('include' => 'children')));

    $temp = $redmine->client->api('issue')->show(17252, array ('include' => 'children'));
    
    var_dump($temp['issue']['children']); exit; // 如果有子任务，['issue']['children']字段不存在，否则['issue']['children']字段对应一个子数组

//        $temp  = $redmine->client->issue->show(17252, array('include' => 'children'));
//        $temp  = $redmine->hasChildIssue(17330);
    var_dump($temp); exit;
```

相关链接:
http://www.redmine.org/projects/redmine/wiki/Rest_Issues

Rest api with php - Redmine 
http://www.redmine.org/projects/redmine/wiki/Rest_api_with_php
