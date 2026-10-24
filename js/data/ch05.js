window.CHAPTER_05 = {
  id: "ch05",
  no: "第五章",
  title: "页面跳转",
  examWeight: "Activity 生命周期、Intent/Bundle、Fragment 是重点",
  knowledge: [
    {
      title: "知识框架（课件原结构）",
      points: [
        "Activity 概述：四大组件之一；创建 / 配置 / 启动 / 关闭。",
        "多个 Activity：用 Intent、Bundle 传数据；可调用另一个 Activity 并返回结果。",
        "Fragment：在 Activity 中描述一部分界面。"
      ]
    },
    {
      title: "5.1 Activity 概述",
      points: [
        "Android 四大基本组件：Activity、Service、BroadcastReceiver、ContentProvider。",
        "Activity 最常见；中文“活动”，代表手机的一屏，提供与用户交互的可视化界面。",
        "有 4 个重要状态；有多个被回调的方法，可按需要重写。",
        "onCreate() 最常用，经常需要重写。"
      ]
    },
    {
      title: "回调方法是什么",
      points: [
        "普通函数：自己的代码主动去调用。",
        "回调函数：只负责重写、写好业务逻辑，不手动调用；由 Android 系统在合适时机自动调用。",
        "Activity 生命周期这一系列方法都是系统回调。",
        "永远不要自己写 activity.onCreate()；由框架在创建、可见、获焦点、退后台等时机依次调用。",
        "生命周期七个方法全部是回调：我们只重写，系统来调用。"
      ]
    },
    {
      title: "生命周期七个方法（课件表）",
      table: {
        headers: ["回调方法", "调用时机", "主要作用"],
        rows: [
          [
            "onCreate",
            "Activity 第一次被创建时",
            "初始化核心工作：加载布局、变量初始化、绑定控件。此时界面还不可见。"
          ],
          [
            "onStart",
            "onCreate 之后；或从后台恢复（onRestart）之后",
            "页面变为可见，但还不能交互。适合：注册广播、启动界面可见才需要的动画。"
          ],
          [
            "onResume",
            "onStart 之后",
            "到前台、获焦点，可接收点击。正常运行状态。适合：开传感器、计时器、开始播放。"
          ],
          [
            "onPause",
            "将要失去焦点（弹窗、打开新 Activity、按 Home）",
            "即将暂停，可能仍部分可见。适合：保存临时数据、暂停动画/计时器。不能做耗时操作。"
          ],
          [
            "onStop",
            "页面完全不可见（被完全盖住或切后台）",
            "释放较占资源的资源；取消网络请求。"
          ],
          [
            "onRestart",
            "已经 stop，从后台再次回前台之前",
            "后台唤醒的前置回调。第一次启动不会执行；只有后台切回来才执行。"
          ],
          [
            "onDestroy",
            "彻底销毁前（返回键 / 系统回收）",
            "最终清理：解绑监听、关数据库、释放资源，防泄漏。之后 Activity 彻底死亡。"
          ]
        ]
      },
      tip: "执行特点：onCreate 和 onDestroy 整个生命周期只执行 1 次；其余几个可多次执行。"
    },
    {
      title: "常见切换路径（便于记忆）",
      points: [
        "首次启动：onCreate → onStart → onResume。",
        "打开新页面或按 Home：onPause →（完全不可见则）onStop。",
        "从后台回到前台：onRestart → onStart → onResume。",
        "页面销毁：… → onPause → onStop → onDestroy。"
      ]
    },
    {
      title: "5.2 创建 / 配置 / 启动 / 关闭 Activity",
      points: [
        "创建 Activity：创建类，并重写回调方法；都需要重写 onCreate()。",
        "配置：写在 AndroidManifest.xml 中（每个 Activity 都要注册）。",
        "启动：可以只有一个 Activity，也可以多个 Activity 互相启动。",
        "关闭：使用 finish() 方法。"
      ]
    },
    {
      title: "5.3.1 Intent 与 Bundle 传数据（必会）",
      points: [
        "启动另一个 Activity 用 Intent。",
        "Intent 是两个 Activity 之间的信使：把要传的数据放进 Intent，就能带到下一个页面。",
        "可以把数据先放进 Bundle，再通过 Intent 的 putExtra / putExtras 交给 Intent。",
        "Bundle 是键值对组合，用来保存要携带的数据包。",
        "数据可以是基本类型、数组；也可以是对象或对象数组（须实现 Serializable 或 Parcelable）。"
      ],
      tip: "键名两边要一致；接收方用 getIntent().getExtras() 或 getXxxExtra 按键取出。"
    },
    {
      title: "5.3.2 调用另一个 Activity 并返回结果",
      points: [
        "课件单独一节：不仅跳转，还可以让被调用页面返回结果给原页面。",
        "课件例题结合了适配器场景（SimpleAdapter / BaseAdapter 列表选择后再回传）。",
        "思路：A 启动 B 并期待结果 → B 处理完把结果带回 → A 收到后再更新界面。"
      ]
    },
    {
      title: "5.4 Fragment（碎片）",
      points: [
        "Fragment 在 Activity 中描述一部分用户界面；Activity 是它的宿主。",
        "一个 Activity 里可以放多个 Fragment，形成多个 UI 面板；也可多个 Activity 共用 Fragment。",
        "典型例子：微信主界面（底部切换多个面板）。",
        "Fragment 生命周期直接受宿主 Activity 生命周期影响。"
      ]
    },
    {
      title: "创建与添加 Fragment",
      points: [
        "创建：写 Fragment 子类（或继承已有 Fragment 子类）。",
        "若要绘制 UI，必须重写 onCreateView()，用 LayoutInflater.inflate 加载布局并返回 View；没有 UI 可返回 null。",
        "在 Activity 中添加 Fragment 有两种方式：① 直接在布局文件中添加；② 在 Activity 运行时动态添加。"
      ]
    },
    {
      title: "本章总结（课件）",
      points: [
        "Activity 的进一步理解和使用。",
        "多个 Activity 之间的数据传输。",
        "Fragment 的应用。"
      ]
    }
  ],
  quiz: [
    {
      id: "c5q1",
      type: "单选",
      stem: "Android 四大基本组件不包括？",
      options: ["Activity", "Service", "Intent", "ContentProvider"],
      answer: [2],
      explain: "四大组件是 Activity、Service、BroadcastReceiver、ContentProvider。Intent 是信使，不是四大组件之一。"
    },
    {
      id: "c5q2",
      type: "单选",
      stem: "Activity 在课件中的含义是？",
      options: [
        "只能做网络请求的类",
        "代表手机的一屏，提供与用户交互的可视化界面",
        "仅等于 Fragment",
        "只负责保存数据库"
      ],
      answer: [1],
      explain: "中文“活动”，一屏交互界面。"
    },
    {
      id: "c5q3",
      type: "单选",
      stem: "关于生命周期回调，正确的是？",
      options: [
        "应在业务代码里主动调用 activity.onCreate()",
        "只重写，由系统在合适时机自动调用",
        "七个方法都不是回调",
        "只有 onDestroy 是回调"
      ],
      answer: [1],
      explain: "生命周期方法全部是回调，不要自己手动调用 onCreate。"
    },
    {
      id: "c5q4",
      type: "单选",
      stem: "onCreate 被调用时，界面是否已经可见？",
      options: ["已经可见且可点击", "此时界面还不可见", "一定已在后台", "等同于 onDestroy"],
      answer: [1],
      explain: "课件：初始化布局等，此时界面还不可见。"
    },
    {
      id: "c5q5",
      type: "单选",
      stem: "页面可见但还不能与用户交互，对应？",
      options: ["onCreate", "onStart", "onResume", "onDestroy"],
      answer: [1],
      explain: "onStart：可见但还不能交互。"
    },
    {
      id: "c5q6",
      type: "单选",
      stem: "页面到前台、获得焦点、可接收点击，对应？",
      options: ["onPause", "onStop", "onResume", "onRestart"],
      answer: [2],
      explain: "onResume 是正常可交互的运行状态。"
    },
    {
      id: "c5q7",
      type: "单选",
      stem: "onPause 中课件特别提醒？",
      options: ["必须开启新线程下载大文件", "不能做耗时操作", "只能用来 finish()", "第一次启动必走 onPause"],
      answer: [1],
      explain: "适合保存临时数据、暂停动画等，不能做耗时操作。"
    },
    {
      id: "c5q8",
      type: "单选",
      stem: "第一次启动页面会执行 onRestart 吗？",
      options: ["会", "不会；只有从后台切回来才执行", "每次 onCreate 前都执行", "等同于 onDestroy"],
      answer: [1],
      explain: "课件：第一次启动不会执行；只有后台切回来才会。"
    },
    {
      id: "c5q9",
      type: "单选",
      stem: "整个生命周期通常只执行 1 次的是？",
      options: ["onStart 与 onStop", "onCreate 与 onDestroy", "onResume 与 onPause", "只有 onRestart"],
      answer: [1],
      explain: "课件：onCreate 和 onDestroy 只执行 1 次；其它可多次。"
    },
    {
      id: "c5q10",
      type: "单选",
      stem: "关闭当前 Activity 使用？",
      options: ["startActivity()", "finish()", "setContentView()", "inflate()"],
      answer: [1],
      explain: "关闭使用 finish()。"
    },
    {
      id: "c5q11",
      type: "单选",
      stem: "两个 Activity 之间传递数据的“信使”是？",
      options: ["Service", "Intent", "ViewGroup", "SharedPreferences（课件本节）"],
      answer: [1],
      explain: "Intent 是两个 Activity 之间的信使。"
    },
    {
      id: "c5q12",
      type: "单选",
      stem: "Bundle 在课件中的定位是？",
      options: [
        "四大组件之一",
        "键值对组合，保存要携带的数据包",
        "只能存图片",
        "替代 AndroidManifest"
      ],
      answer: [1],
      explain: "Bundle 是键值对数据包，常再放进 Intent。"
    },
    {
      id: "c5q13",
      type: "单选",
      stem: "通过 Intent 携带对象或对象数组时，课件要求？",
      options: [
        "任意对象都可以",
        "必须实现 Serializable 或 Parcelable",
        "只能用 String",
        "必须放进 mipmap"
      ],
      answer: [1],
      explain: "对象/对象数组须实现 Serializable 或 Parcelable。"
    },
    {
      id: "c5q14",
      type: "单选",
      stem: "Fragment 与 Activity 的关系，课件说法是？",
      options: [
        "Fragment 宿主是 Service",
        "Fragment 在 Activity 中描述一部分 UI，Activity 是宿主",
        "Fragment 完全不受 Activity 生命周期影响",
        "一个应用只能有一个 Fragment"
      ],
      answer: [1],
      explain: "Activity 是宿主；Fragment 生命周期直接受宿主影响。"
    },
    {
      id: "c5q15",
      type: "单选",
      stem: "Fragment 要绘制界面时，必须重写并返回 View 的方法是？",
      options: ["onCreate()", "onCreateView()", "onResume()", "finish()"],
      answer: [1],
      explain: "首次绘制 UI 必须重写 onCreateView()；无 UI 可返回 null。"
    },
    {
      id: "c5q16",
      type: "多选",
      stem: "创建 / 使用 Activity 时，课件提到的步骤包括？",
      options: [
        "创建并重写 onCreate()",
        "在 AndroidManifest.xml 中配置",
        "可用 Intent 启动",
        "用 finish() 关闭",
        "不必注册就能 startActivity"
      ],
      answer: [0, 1, 2, 3],
      explain: "必须在 Manifest 配置；不是随便就能启动未注册的 Activity。"
    },
    {
      id: "c5q17",
      type: "多选",
      stem: "在 Activity 中添加 Fragment 的方式有？",
      options: [
        "直接在布局文件中添加",
        "在 Activity 运行时动态添加",
        "只能写在 values/strings.xml",
        "只能通过 BroadcastReceiver 添加"
      ],
      answer: [0, 1],
      explain: "课件两种：布局中添加；运行时添加。"
    },
    {
      id: "c5q18",
      type: "多选",
      stem: "从后台回到前台时，通常会经过？",
      options: ["onRestart", "onStart", "onResume", "onDestroy"],
      answer: [0, 1, 2],
      explain: "onRestart → onStart → onResume；不会因此走 onDestroy。"
    },
    {
      id: "c5q19",
      type: "判断",
      stem: "onCreate 是最常用、经常需要重写的生命周期方法。",
      options: ["对", "错"],
      answer: [0],
      explain: "课件明确 onCreate 最常用。"
    },
    {
      id: "c5q20",
      type: "判断",
      stem: "可以把数据放进 Bundle，再通过 Intent 带到另一个 Activity。",
      options: ["对", "错"],
      answer: [0],
      explain: "课件 5.3.1 的核心做法。"
    },
    {
      id: "c5q21",
      type: "判断",
      stem: "一个单独的 Activity 中不能放多个 Fragment。",
      options: ["对", "错"],
      answer: [1],
      explain: "可以用多个 Fragment 建立多个 UI 面板，如微信主界面。"
    },
    {
      id: "c5q22",
      type: "填空",
      stem: "关闭 Activity 使用 ______ 方法。",
      answerText: "finish()",
      accept: ["finish"],
      explain: "5.2.4 关闭 Activity：使用 finish()。"
    },
    {
      id: "c5q23",
      type: "填空",
      stem: "Intent 是两个 Activity 之间的 ______。",
      answerText: "信使",
      accept: ["信使", "messenger"],
      explain: "课件原词：信使。"
    }
  ]
};
