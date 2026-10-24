window.CHAPTER_MOCK = {
  id: "mock",
  no: "综合模拟",
  title: "五套模拟题",
  examWeight: "覆盖第一到五章，建议限时 45–60 分钟/套",
  knowledge: [
    {
      title: "怎么用这五套题",
      points: [
        "每套都含：单选、多选、判断、简答、代码补全、代码题。",
        "建议按套做：先自己写，再点「交卷看分」。客观题自动判分；简答/代码题按关键词判分，并给出参考答案。",
        "内容严格对应课件：环境与项目结构、布局、常用控件与 Adapter、Activity/Intent/Fragment。",
        "切套不会保留上一套的勾选，做完一套再换下一套。"
      ],
      tip: "简答写关键词即可得分；代码题不必与参考一字不差，关键 API 写对就能过。"
    },
    {
      title: "五套侧重点",
      points: [
        "模拟一：偏基础概念 + LinearLayout/FrameLayout + Button 监听。",
        "模拟二：偏项目结构、res/R.java、Spinner/ListView、ArrayAdapter。",
        "模拟三：偏 ConstraintLayout、单向/双向约束、SeekBar/RatingBar。",
        "模拟四：偏 Adapter 三种、BaseAdapter 四方法、SimpleAdapter。",
        "模拟五：偏 Activity 生命周期、Intent/Bundle、Fragment。"
      ]
    }
  ],
  mockSets: [
    {
      id: "set1",
      title: "模拟一",
      quiz: [
        {
          id: "s1-1",
          type: "单选",
          stem: "国产厂商深度定制 Android 时，开源基础通常是？",
          options: ["iOS SDK", "AOSP", "Xcode", "ArkUI 仅"],
          answer: [1],
          explain: "基于 AOSP 二次修改。"
        },
        {
          id: "s1-2",
          type: "单选",
          stem: "本课程教学使用的 Android 语言是？",
          options: ["只学 Kotlin", "Java", "只学 Swift", "只学 Dart"],
          answer: [1],
          explain: "课程用 Java；Kotlin 可自学。"
        },
        {
          id: "s1-3",
          type: "单选",
          stem: "LinearLayout 中控制水平/垂直排列的属性是？",
          options: ["layout_weight", "orientation", "gravity", "entries"],
          answer: [1],
          explain: "orientation。"
        },
        {
          id: "s1-4",
          type: "单选",
          stem: "Button 要真正起作用，课件强调必须？",
          options: ["设置 src", "添加事件监听器", "放进 mipmap", "写成 static"],
          answer: [1],
          explain: "必须加监听器。"
        },
        {
          id: "s1-5",
          type: "单选",
          stem: "关闭当前 Activity 使用？",
          options: ["startActivity()", "finish()", "inflate()", "setAdapter()"],
          answer: [1],
          explain: "finish()。"
        },
        {
          id: "s1-6",
          type: "多选",
          stem: "FrameLayout 的特点包括？",
          options: [
            "默认子组件在左上角",
            "后面的组件覆盖前面的",
            "适合层叠场景",
            "每一列只能放一个组件且自动换行"
          ],
          answer: [0, 1, 2],
          explain: "自动换行是 LinearLayout 也不具备的；帧布局是层叠。"
        },
        {
          id: "s1-7",
          type: "多选",
          stem: "设置按钮监听器的常用方式包括？",
          options: [
            "在 Java 代码中完成",
            "Java 与布局文件共同完成",
            "只能写在 AndroidManifest 里",
            "还有其它方法"
          ],
          answer: [0, 1, 3],
          explain: "课件提了两种常用及其它方法。"
        },
        {
          id: "s1-8",
          type: "多选",
          stem: "Android 系统架构中，与 Libraries 同层并列的是？",
          options: ["Applications", "Android Runtime", "Linux Kernel", "Dalvik 所在的 Runtime"],
          answer: [1, 3],
          explain: "Libraries 与 Android Runtime 同层；Dalvik 在 Runtime。"
        },
        {
          id: "s1-9",
          type: "判断",
          stem: "layout_weight 默认值为 0，表示不占用剩余空间。",
          options: ["对", "错"],
          answer: [0],
          explain: "课件原意。"
        },
        {
          id: "s1-10",
          type: "判断",
          stem: "纯血鸿蒙 NEXT 可以直接安装普通 APK。",
          options: ["对", "错"],
          answer: [1],
          explain: "NEXT 只认 hap。"
        },
        {
          id: "s1-11",
          type: "判断",
          stem: "gravity 控制控件在父容器中的位置，layout_gravity 控制内部文字对齐。",
          options: ["对", "错"],
          answer: [1],
          explain: "正好相反：gravity 对内，layout_gravity 对外。"
        },
        {
          id: "s1-12",
          type: "判断",
          stem: "生命周期方法应由系统回调，不要自己写 activity.onCreate()。",
          options: ["对", "错"],
          answer: [0],
          explain: "全部是回调。"
        },
        {
          id: "s1-13",
          type: "简答",
          stem: "简述 Intent 在多个 Activity 之间的作用（结合 Bundle）。",
          answerText:
            "Intent 是两个 Activity 之间的信使；可将数据放入 Bundle（键值对），再通过 putExtra/putExtras 交给 Intent，目标页用 getIntent 取出。",
          accept: ["信使", "intent", "bundle", "键值", "putextra", "传递"],
          explain: "抓住信使 + Bundle 键值对即可。"
        },
        {
          id: "s1-14",
          type: "简答",
          stem: "写出 res 下 drawable、layout、mipmap、values 各自保存什么。",
          answerText:
            "drawable：图片（PNG/JPEG/GIF/9-Patch/Shape 等）；layout：布局文件；mipmap：启动图标；values：字符串、样式、颜色等。",
          accept: ["drawable", "layout", "mipmap", "values", "图标", "布局", "字符串"],
          explain: "四个目录职责要对上。"
        },
        {
          id: "s1-15",
          type: "代码补全",
          stem: "在 onCreate 中加载布局 activity_main，补全语句：\nsetContentView(______);",
          answerText: "R.layout.activity_main",
          accept: ["r.layout.activity_main", "R.layout.activity_main"],
          explain: "通过 R.layout 引用布局。"
        },
        {
          id: "s1-16",
          type: "代码补全",
          stem: "给按钮 btn 设置点击监听（匿名内部类写法），补全方法名：\nbtn.______(new View.OnClickListener() { ... });",
          answerText: "setOnClickListener",
          accept: ["setonclicklistener", "setOnClickListener"],
          explain: "setOnClickListener。"
        },
        {
          id: "s1-17",
          type: "代码",
          stem: "阅读：下列布局根标签横向排列两个按钮，缺什么属性？\n<LinearLayout\n  android:layout_width=\"match_parent\"\n  android:layout_height=\"wrap_content\">\n  <Button .../>\n  <Button .../>\n</LinearLayout>\n请写出应补充的属性及取值。",
          code: true,
          answerText: 'android:orientation="horizontal"',
          accept: ["orientation", "horizontal"],
          explain: "水平排列需要 orientation=\"horizontal\"（不写则默认 horizontal，但题目要求写出控制水平的属性）。"
        },
        {
          id: "s1-18",
          type: "代码",
          stem: "写出用 Toast 提示“保存成功”的一行常用写法。",
          code: true,
          answerText: 'Toast.makeText(this, "保存成功", Toast.LENGTH_SHORT).show();',
          accept: ["toast", "maketext", "show", "保存成功"],
          explain: "注意是 makeText，不是 MakeText。"
        }
      ]
    },
    {
      id: "set2",
      title: "模拟二",
      quiz: [
        {
          id: "s2-1",
          type: "单选",
          stem: "Project 与 Module 的关系，正确的是？",
          options: [
            "Project 是一屏，Module 是控件",
            "Project 是工作空间，Module 是项目；创建后常自动有 app Module",
            "一个 Project 只能有一个 Module",
            "Module 就是 R.java"
          ],
          answer: [1],
          explain: "课件定义。"
        },
        {
          id: "s2-2",
          type: "单选",
          stem: "Android 视图下三个常用节点是？",
          options: [
            "build、gradle、idea",
            "manifests、java、res",
            "apk、hap、ipa",
            "only drawable"
          ],
          answer: [1],
          explain: "manifests / java / res。"
        },
        {
          id: "s2-3",
          type: "单选",
          stem: "每个 Activity 在 Manifest 中必须有？",
          options: ["<service>", "<activity>", "<provider>", "<receiver>"],
          answer: [1],
          explain: "必须有 <activity> 标记。"
        },
        {
          id: "s2-4",
          type: "单选",
          stem: "应用启动图标放在？",
          options: ["layout", "values", "mipmap", "java"],
          answer: [2],
          explain: "mipmap。"
        },
        {
          id: "s2-5",
          type: "单选",
          stem: "列表项已知时，Spinner 可用？",
          options: [
            "entries 指向 string-array",
            "只能 BaseAdapter",
            "只能 CheckBox",
            "写在 Linux Kernel"
          ],
          answer: [0],
          explain: "entries=\"@array/名\"。"
        },
        {
          id: "s2-6",
          type: "多选",
          stem: "关于 R.java，正确的是？",
          options: [
            "res 中每个资源在其中有索引",
            "res 变化时会自动修改",
            "必须手写维护全部 id",
            "代码可用 R.layout / R.id 引用资源"
          ],
          answer: [0, 1, 3],
          explain: "自动生成，不必手写维护。"
        },
        {
          id: "s2-7",
          type: "多选",
          stem: "第三方模拟器连接相关正确做法包括？",
          options: [
            "环境变量 AS 指向 platform-tools",
            "Path 中添加 %AS%;",
            "adb connect 127.0.0.1:端口",
            "必须删除 SDK"
          ],
          answer: [0, 1, 2],
          explain: "课件步骤。"
        },
        {
          id: "s2-8",
          type: "多选",
          stem: "ArrayAdapter 构造常用三参数是？",
          options: ["上下文 this", "item 样式布局", "数据源", "AndroidManifest 路径"],
          answer: [0, 1, 2],
          explain: "context、布局、数据。"
        },
        {
          id: "s2-9",
          type: "判断",
          stem: "同一个 Project 下可以创建多个 Module。",
          options: ["对", "错"],
          answer: [0],
          explain: "可以。"
        },
        {
          id: "s2-10",
          type: "判断",
          stem: "res 新增资源后必须手动改 R.java。",
          options: ["对", "错"],
          answer: [1],
          explain: "自动修改。"
        },
        {
          id: "s2-11",
          type: "判断",
          stem: "ListView 与 Spinner 都既可布局指定列表项，也可通过 Adapter 指定。",
          options: ["对", "错"],
          answer: [0],
          explain: "课件原话。"
        },
        {
          id: "s2-12",
          type: "判断",
          stem: "Windows 上有了 Studio 的 Git 图形界面，就不必再安装 Git 软件。",
          options: ["对", "错"],
          answer: [1],
          explain: "Windows 仍需独立安装 Git。"
        },
        {
          id: "s2-13",
          type: "简答",
          stem: "真机调试时，课件提到需要完成哪些关键步骤？",
          answerText:
            "数据线连接；安装驱动；授权电脑管理手机；打开开发者模式；允许 USB 调试（不同手机入口可能不同）。",
          accept: ["数据线", "驱动", "开发者", "usb", "调试"],
          explain: "步骤答全即可。"
        },
        {
          id: "s2-14",
          type: "简答",
          stem: "说明 ArrayAdapter 的主要局限。",
          answerText: "比较简单，有局限性，通常只能方便地显示一行文本数据。",
          accept: ["一行", "文本", "局限", "简单"],
          explain: "对应课件对 ArrayAdapter 的评价。"
        },
        {
          id: "s2-15",
          type: "代码补全",
          stem: "动态为 Spinner 绑定适配器：\nArrayAdapter<String> adapter = new ArrayAdapter<>(this, android.R.layout.simple_spinner_item, school);\nspinner.______(adapter);",
          answerText: "setAdapter",
          accept: ["setadapter", "setAdapter"],
          explain: "setAdapter 关联。"
        },
        {
          id: "s2-16",
          type: "代码补全",
          stem: "取 Spinner 当前选中项文本：\nString s = spinner.______().toString();",
          answerText: "getSelectedItem",
          accept: ["getselecteditem", "getSelectedItem"],
          explain: "也可用 getItemAtPosition。"
        },
        {
          id: "s2-17",
          type: "代码",
          stem: "在 values 中定义名为 school 的字符串数组，至少写 2 个 item（XML）。",
          code: true,
          answerText:
            '<string-array name="school">\n  <item>北京工商大学</item>\n  <item>北京邮电大学</item>\n</string-array>',
          accept: ["string-array", "name=\"school\"", "item"],
          explain: "课件例 4-5-1。"
        },
        {
          id: "s2-18",
          type: "代码",
          stem: "写出 ListView 设置条目点击监听的框架（方法名 + 接口名即可，可简写）。",
          code: true,
          answerText:
            "listView.setOnItemClickListener(new AdapterView.OnItemClickListener() { onItemClick(...); });",
          accept: ["setonitemclicklistener", "onitemclick", "OnItemClickListener"],
          explain: "ListView 用 OnItemClickListener。"
        }
      ]
    },
    {
      id: "set3",
      title: "模拟三",
      quiz: [
        {
          id: "s3-1",
          type: "单选",
          stem: "官方推荐、新建项目默认的主流根布局是？",
          options: ["RelativeLayout", "TableLayout", "ConstraintLayout", "AbsoluteLayout"],
          answer: [2],
          explain: "ConstraintLayout。"
        },
        {
          id: "s3-2",
          type: "单选",
          stem: "ConstraintLayout 中控件要固定位置，至少需要？",
          options: [
            "只设 width",
            "水平至少一条、垂直至少一条约束",
            "必须四边双向约束",
            "必须 Guideline"
          ],
          answer: [1],
          explain: "缺约束会跑到左上角。"
        },
        {
          id: "s3-3",
          type: "单选",
          stem: "bias=0.5 通常表示？",
          options: ["隐藏", "居中", "销毁", "换行"],
          answer: [1],
          explain: "两边约束时 0.5 居中。"
        },
        {
          id: "s3-4",
          type: "单选",
          stem: "SeekBar 的 max / progress 含义？",
          options: ["行/列", "最大值/当前值", "星星数/半星", "宽/高"],
          answer: [1],
          explain: "最大值与当前值。"
        },
        {
          id: "s3-5",
          type: "单选",
          stem: "RatingBar 的 stepSize 默认？",
          options: ["1 整星", "半个星", "0", "5"],
          answer: [1],
          explain: "默认半个。"
        },
        {
          id: "s3-6",
          type: "多选",
          stem: "单向约束的特点包括？",
          options: [
            "同一方向只约束一边",
            "宽度常由内容决定（wrap_content）",
            "可方便使用 bias 与 0dp 填满",
            "另一侧相对自由"
          ],
          answer: [0, 1, 3],
          explain: "bias 与 0dp 需要双向约束。"
        },
        {
          id: "s3-7",
          type: "多选",
          stem: "ConstraintLayout 高级特性包括？",
          options: ["Chain", "Guideline", "Barrier", "必须嵌套五层 LinearLayout"],
          answer: [0, 1, 2],
          explain: "目标是减少嵌套。"
        },
        {
          id: "s3-8",
          type: "多选",
          stem: "按课件对比表，当前仍常用的有？",
          options: [
            "ConstraintLayout 作根布局",
            "FrameLayout 做轻量叠层",
            "RelativeLayout 作新项目首选根布局",
            "LinearLayout 做简单局部"
          ],
          answer: [0, 1, 3],
          explain: "RelativeLayout 基本淘汰。"
        },
        {
          id: "s3-9",
          type: "判断",
          stem: "一个布局文件最多只能有一个根布局管理器。",
          options: ["对", "错"],
          answer: [0],
          explain: "课件嵌套规则。"
        },
        {
          id: "s3-10",
          type: "判断",
          stem: "根布局必须有 xmlns 属性。",
          options: ["对", "错"],
          answer: [0],
          explain: "必须有。"
        },
        {
          id: "s3-11",
          type: "判断",
          stem: "双向约束下可用 0dp（match_constraint）填满约束范围。",
          options: ["对", "错"],
          answer: [0],
          explain: "正确。"
        },
        {
          id: "s3-12",
          type: "判断",
          stem: "Padding 是外边距，Margin 是内边距。",
          options: ["对", "错"],
          answer: [1],
          explain: "相反。"
        },
        {
          id: "s3-13",
          type: "简答",
          stem: "对比相对布局与约束布局的不同点（按课件）。",
          answerText:
            "相对布局参照物只能是控件或父容器，复杂界面易嵌套；约束布局参照物更多，支持双向约束、辅助线、链条，可单层完成复杂页，减少嵌套，性能更好，官方主推。",
          accept: ["嵌套", "约束", "辅助线", "链条", "官方", "参照"],
          explain: "答出能力差异即可。"
        },
        {
          id: "s3-14",
          type: "简答",
          stem: "为什么布局不能嵌套太深？",
          answerText: "结构复杂，且会降低页面加载速度。",
          accept: ["复杂", "加载", "速度", "性能"],
          explain: "课件原句。"
        },
        {
          id: "s3-15",
          type: "代码补全",
          stem: "SeekBar 进度变化时设置图片透明度：\nimage.setImageAlpha(______); // 参数为当前进度 i",
          answerText: "i（或 progress）",
          accept: ["i", "progress"],
          explain: "课件例用当前滑块值 i。"
        },
        {
          id: "s3-16",
          type: "代码补全",
          stem: "ConstraintLayout 全名包路径以 androidx 开头，补全类名：\nandroidx.constraintlayout.widget.______",
          answerText: "ConstraintLayout",
          accept: ["constraintlayout", "ConstraintLayout"],
          explain: "课件给出的全名。"
        },
        {
          id: "s3-17",
          type: "代码",
          stem: "写出 RatingBar 监听评分变化的接口名，并说明回调里常用哪个方法取星级。",
          code: true,
          answerText:
            "OnRatingBarChangeListener；可用回调参数或 getRating() 取得 float 星级。",
          accept: ["onratingbarchangelistener", "getrating", "rating"],
          explain: "课件例 4-3-3。"
        },
        {
          id: "s3-18",
          type: "代码",
          stem: "用文字描述：如何让按钮在父容器中水平居中且宽度随内容（单向约束思路）？",
          code: true,
          answerText:
            "水平方向只约束一边不够居中；应左右都约束到父容器，再设 horizontal bias=0.5，宽度 wrap_content。",
          accept: ["bias", "0.5", "左右", "双向", "wrap"],
          explain: "居中通常靠双向约束 + bias。"
        }
      ]
    },
    {
      id: "set4",
      title: "模拟四",
      quiz: [
        {
          id: "s4-1",
          type: "单选",
          stem: "Adapter 的作用是？",
          options: [
            "替代 Manifest",
            "组件与数据的桥梁，绑定到 ListView/GridView/Spinner 等",
            "只负责生命周期",
            "只显示 ProgressBar"
          ],
          answer: [1],
          explain: "桥梁。"
        },
        {
          id: "s4-2",
          type: "单选",
          stem: "可最大限度定制列表项、灵活性最高的是？",
          options: ["ArrayAdapter", "SimpleAdapter", "BaseAdapter", "Toast"],
          answer: [2],
          explain: "BaseAdapter。"
        },
        {
          id: "s4-3",
          type: "单选",
          stem: "SimpleAdapter 数据源通常是？",
          options: ["单个 int", "List<Map>", "只有 Activity", "R.java 本身"],
          answer: [1],
          explain: "含 Map 的集合。"
        },
        {
          id: "s4-4",
          type: "单选",
          stem: "BaseAdapter 中生成每一行视图的方法是？",
          options: ["getCount", "getItem", "getItemId", "getView"],
          answer: [3],
          explain: "getView。"
        },
        {
          id: "s4-5",
          type: "单选",
          stem: "CheckBox 判断是否选中用？",
          options: ["getText()", "isChecked()", "getCount()", "finish()"],
          answer: [1],
          explain: "isChecked()。"
        },
        {
          id: "s4-6",
          type: "多选",
          stem: "三种常用 Adapter 实现类是？",
          options: ["ArrayAdapter", "SimpleAdapter", "BaseAdapter", "AppCompatActivity"],
          answer: [0, 1, 2],
          explain: "三种。"
        },
        {
          id: "s4-7",
          type: "多选",
          stem: "BaseAdapter 必须实现？",
          options: ["getCount", "getItem", "getItemId", "getView"],
          answer: [0, 1, 2, 3],
          explain: "四个方法。"
        },
        {
          id: "s4-8",
          type: "多选",
          stem: "SimpleAdapter 五个参数涉及？",
          options: [
            "上下文",
            "List<Map> 数据",
            "item 布局",
            "与 Map key 对应的 String[]",
            "与控件 id 对应的 int[]"
          ],
          answer: [0, 1, 2, 3, 4],
          explain: "五参数全要。"
        },
        {
          id: "s4-9",
          type: "判断",
          stem: "ArrayAdapter 很适合显示复杂多控件自定义行（比 BaseAdapter 更灵活）。",
          options: ["对", "错"],
          answer: [1],
          explain: "ArrayAdapter 局限一行文本；高度定制用 BaseAdapter。"
        },
        {
          id: "s4-10",
          type: "判断",
          stem: "SimpleAdapter 的 String[] key 必须与 Map 的 key 对应。",
          options: ["对", "错"],
          answer: [0],
          explain: "必须对应。"
        },
        {
          id: "s4-11",
          type: "判断",
          stem: "RadioButton 的 checked 默认是 false。",
          options: ["对", "错"],
          answer: [0],
          explain: "默认未选中。"
        },
        {
          id: "s4-12",
          type: "判断",
          stem: "ImageView 的 src 可来自 drawable 或 mipmap。",
          options: ["对", "错"],
          answer: [0],
          explain: "课件说明。"
        },
        {
          id: "s4-13",
          type: "简答",
          stem: "说明 Adapter 为什么能降低耦合。",
          answerText:
            "数据源多样而组件显示格式固定；Adapter 把数据源转换成可显示格式，使数据来源与显示解耦。",
          accept: ["解耦", "转换", "数据源", "显示", "桥梁"],
          explain: "课件 Adapter 意义。"
        },
        {
          id: "s4-14",
          type: "简答",
          stem: "写出 BaseAdapter 四个方法及一句话职责。",
          answerText:
            "getCount：个数；getItem：取数据项；getItemId：行 ID；getView：每一行显示内容。",
          accept: ["getcount", "getitem", "getitemid", "getview"],
          explain: "四方法必背。"
        },
        {
          id: "s4-15",
          type: "代码补全",
          stem: "listView.setAdapter(adapter);\nlistView.______(new AdapterView.OnItemClickListener(){...});",
          answerText: "setOnItemClickListener",
          accept: ["setonitemclicklistener", "setOnItemClickListener"],
          explain: "点击监听。"
        },
        {
          id: "s4-16",
          type: "代码补全",
          stem: "在 getView 中复用行视图的参数名通常是？\npublic View getView(int position, View ______, ViewGroup parent)",
          answerText: "convertView",
          accept: ["convertview", "convertView"],
          explain: "convertView 复用。"
        },
        {
          id: "s4-17",
          type: "代码",
          stem: "根据课件思路，用伪代码写出：把图片 id 与姓名放入 List<Map>，再创建 SimpleAdapter 的关键几行。",
          code: true,
          answerText:
            "Map.put(\"image\", id); Map.put(\"name\", title); listItems.add(map);\nnew SimpleAdapter(this, listItems, R.layout.main, new String[]{\"name\",\"image\"}, new int[]{R.id.title, R.id.image});",
          accept: ["map", "put", "simpleadapter", "list", "string[]"],
          explain: "例 4-5-2-2。"
        },
        {
          id: "s4-18",
          type: "代码",
          stem: "阅读并指出问题：RadioGroup 里放了两个 CheckBox，想做单选。是否正确？应怎么改？",
          code: true,
          answerText:
            "不正确。单选应使用 RadioGroup + RadioButton；CheckBox 用于多选。",
          accept: ["radiobutton", "checkbox", "单选", "多选"],
          explain: "控件选型。"
        }
      ]
    },
    {
      id: "set5",
      title: "模拟五",
      quiz: [
        {
          id: "s5-1",
          type: "单选",
          stem: "四大组件不包括？",
          options: ["Activity", "Service", "Intent", "BroadcastReceiver"],
          answer: [2],
          explain: "Intent 不是四大组件。"
        },
        {
          id: "s5-2",
          type: "单选",
          stem: "页面可见但还不能交互，对应？",
          options: ["onCreate", "onStart", "onResume", "onDestroy"],
          answer: [1],
          explain: "onStart。"
        },
        {
          id: "s5-3",
          type: "单选",
          stem: "可接收用户点击的正常前台状态是？",
          options: ["onPause", "onStop", "onResume", "onCreate"],
          answer: [2],
          explain: "onResume。"
        },
        {
          id: "s5-4",
          type: "单选",
          stem: "第一次启动会执行 onRestart 吗？",
          options: ["会", "不会", "每次 onCreate 前都会", "等同 onDestroy"],
          answer: [1],
          explain: "只有后台回来才执行。"
        },
        {
          id: "s5-5",
          type: "单选",
          stem: "Fragment 要绘制 UI 必须重写？",
          options: ["onCreate", "onCreateView", "finish", "onDestroy 仅"],
          answer: [1],
          explain: "onCreateView 返回 View。"
        },
        {
          id: "s5-6",
          type: "多选",
          stem: "整个生命周期通常只执行一次的是？",
          options: ["onCreate", "onDestroy", "onResume", "onPause"],
          answer: [0, 1],
          explain: "onCreate 与 onDestroy。"
        },
        {
          id: "s5-7",
          type: "多选",
          stem: "从后台回前台通常经过？",
          options: ["onRestart", "onStart", "onResume", "onDestroy"],
          answer: [0, 1, 2],
          explain: "三连。"
        },
        {
          id: "s5-8",
          type: "多选",
          stem: "在 Activity 中添加 Fragment 的方式？",
          options: [
            "布局文件中直接添加",
            "运行时动态添加",
            "只能写在 strings.xml",
            "只能用 BroadcastReceiver"
          ],
          answer: [0, 1],
          explain: "两种方式。"
        },
        {
          id: "s5-9",
          type: "判断",
          stem: "onPause 中可以做耗时操作。",
          options: ["对", "错"],
          answer: [1],
          explain: "不能做耗时操作。"
        },
        {
          id: "s5-10",
          type: "判断",
          stem: "Intent 是两个 Activity 之间的信使。",
          options: ["对", "错"],
          answer: [0],
          explain: "课件原词。"
        },
        {
          id: "s5-11",
          type: "判断",
          stem: "携带对象必须实现 Serializable 或 Parcelable。",
          options: ["对", "错"],
          answer: [0],
          explain: "课件要求。"
        },
        {
          id: "s5-12",
          type: "判断",
          stem: "Fragment 生命周期不受宿主 Activity 影响。",
          options: ["对", "错"],
          answer: [1],
          explain: "直接受宿主影响。"
        },
        {
          id: "s5-13",
          type: "简答",
          stem: "简述 onCreate、onStart、onResume 三者在“可见/可交互”上的差别。",
          answerText:
            "onCreate：创建初始化，界面还不可见；onStart：可见但还不能交互；onResume：前台获焦点，可点击交互。",
          accept: ["不可见", "可见", "交互", "焦点", "oncreate", "onstart", "onresume"],
          explain: "三阶段差别是高频点。"
        },
        {
          id: "s5-14",
          type: "简答",
          stem: "什么是回调函数？为什么生命周期方法都是回调？",
          answerText:
            "回调：只重写逻辑，不手动调用，由系统在适当时机调用。生命周期七方法都由系统在创建/可见/焦点/后台等时机自动调用。",
          accept: ["系统", "自动", "重写", "不手动", "回调"],
          explain: "课件定义。"
        },
        {
          id: "s5-15",
          type: "代码补全",
          stem: "启动 BillActivity：\nIntent intent = new Intent(MainActivity.this, ______);\nstartActivity(intent);",
          answerText: "BillActivity.class",
          accept: ["billactivity.class", ".class"],
          explain: "显式 Intent 目标为 Xxx.class。"
        },
        {
          id: "s5-16",
          type: "代码补全",
          stem: "Fragment 中加载布局：\nView view = inflater.______(R.layout.xxx, container, false);\nreturn view;",
          answerText: "inflate",
          accept: ["inflate"],
          explain: "onCreateView 里 inflate。"
        },
        {
          id: "s5-17",
          type: "代码",
          stem: "写出 A 向 B 传递字符串 name=\"曹艳\" 的关键代码（Intent + putExtra），并写出 B 中取出的一句。",
          code: true,
          answerText:
            'Intent i = new Intent(A.this, B.class);\ni.putExtra("name", "曹艳"); startActivity(i);\n// B: getIntent().getStringExtra("name");',
          accept: ["putextra", "getstringextra", "intent", "name"],
          explain: "键名一致。"
        },
        {
          id: "s5-18",
          type: "代码",
          stem: "也可先 Bundle 再 putExtras。补全思路代码（写出 Bundle 放入与取出关键句）。",
          code: true,
          answerText:
            'Bundle b = new Bundle(); b.putString("name", "曹艳"); intent.putExtras(b);\nBundle b2 = getIntent().getExtras(); String name = b2.getString("name");',
          accept: ["bundle", "putstring", "putextras", "getextras"],
          explain: "课件 Bundle 用法。"
        }
      ]
    }
  ]
};
