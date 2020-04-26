import React, { useCallback } from 'react';
import { Link, Access, useAccess, useRequest, useModel } from 'umi';
import { Button } from 'antd';

export default function Homepage() {
  const access = useAccess();

  const { value ,setValue, setEnums } = useModel('home');

  /** 获取所有字典 */
  useRequest(() => API.recruitment.dict.getAllDict.fetch(), {
    onSuccess: data => {
      setEnums(data);
    },
    onError: error => {
      console.log(error.message);
    }
  });

  const { run: run1 } = useRequest(() => API.recruitment.interview.queryApplyingInterviewList.fetch({
    page: 1
  }), {
    manual: true,
    onError: error => {
      console.log(error.message)
    }
  })

  const fetchValue = useCallback(async () => {
    if (value) {
      const result = await API.recruitment.jobCategory.addJobCategory.fetch({ dictValue: value })
      return result;
    }
    return API.recruitment.jobCategory.addJobCategory.init;
  }, [value]);

  useRequest(fetchValue, {
    refreshDeps: [fetchValue],
  })

  return (
    <div>
      <div>
        <Link to="/contacts">contacts</Link>
      </div>
      <div>
        <Button type="primary">hello, antd</Button>
      </div>
      <div>
        <Access
          accessible={access.canRead}
          fallback={<div>对不起，您没有权限查看此内容</div>}
        >
          你能看到我，说明你具有test权限
        </Access>
      </div>
      <div>
        <Access
          accessible={access.canUpdate}
          fallback={<div>对不起，您没有权限查看此内容</div>}
        >
          你能看到我，说明你具有hahaha权限
        </Access>
      </div>
      <div>你能看到我，因为我对权限没有要求</div>
      <div style={{ fontSize: '20px', fontWeight: 600, marginTop: '100px' }}>以下为pont+useRequest使用示例</div>
      <div style={{ color: 'red' }}>如果要测试接口请求，请在global.ts中将services引入进来，并在pont-config.json中配置originUrl</div>
      <div>originUrl地址为http://recruitment.test.thundersdata.com/v2/api-docs</div>
      <Button onClick={() => run1()}>手动执行get请求</Button>
      <Button onClick={() => setValue('aaaa')}>把value由undefined设置为a</Button>
      <Button onClick={() => setValue('bbbbb')}>value由aaa变成bbb</Button>
      <div>value值：{value}</div>
    </div>
  );
}
