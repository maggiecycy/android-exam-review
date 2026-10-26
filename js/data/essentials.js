window.CHAPTER_ESSENTIALS = {
  id: "essentials",
  no: "必备知识点",
  title: "40个常考概念",
  examWeight: "知识点共 40 个；按定义 / 分类 / 作用 / 区别背",
  knowledge: [
    {
      title: "怎么用这一章",
      points: [
        "「知识点」页：40 个常考概念，每条按简答口径写（定义 / 分类 / 作用 / 区别）。",
        "「测试」页：对应默写练习，交卷后对照参考答案。",
        "范围：第一到五章课件核心（已去掉 AOSP/鸿蒙/跨平台/Kotlin 对比）。"
      ],
      tip: "先背知识点 1–40，再去做测试默写。"
    },
    {
      title: "1.【分类】Android 系统架构四层（自上而下）",
      points: [
        "Applications（应用层）：Home、Contacts、Phone、Browser 等。",
        "Application Framework（应用框架层）：Activity Manager、Window Manager、Content Providers、View System 等。",
        "Libraries + Android Runtime（同层并列）：本地库如 SQLite、WebKit、OpenGL ES；Runtime 含 Core Libraries、Dalvik。",
        "Linux Kernel（内核层）：驱动与电源管理等。",
        "作用：分层后上层用框架 API，屏蔽下层细节。"
      ],
      tip: "Runtime 与 Libraries 同层，不要画成五层。"
    },
    {
      title: "2.【区别】Project 与 Module",
      points: [
        "Project：工作空间。",
        "Module：一个应用项目/模块；创建 Project 后常自动生成名为 app 的 Module。",
        "一个 Project 下可以有多个 Module。",
        "运行前要在工具栏选对要运行的 Module。"
      ]
    },
    {
      title: "3.【分类】Android 视图下三个常用节点及作用",
      points: [
        "manifests：应用程序配置文件（AndroidManifest.xml），是应用全局描述。",
        "java：所有包及源文件（如 MainActivity.java）。",
        "res：资源文件；每个资源在 R.java 中有索引；res 变化时 R.java 自动更新。"
      ]
    },
    {
      title: "4.【作用】AndroidManifest.xml 是什么？Activity 如何注册？",
      points: [
        "AndroidManifest.xml 是应用的全局配置文件，位于 manifests 节点下。",
        "描述应用包名、组件、权限等全局信息。",
        "每个 Activity 都必须在 Manifest 中有对应的 <activity> 标记，否则无法启动。"
      ]
    },
    {
      title: "5.【分类】res 四个子目录分别存什么",
      points: [
        "drawable：图片资源（PNG、JPEG、GIF、9-Patch、Shape 等）。",
        "layout：布局文件（如 activity_main.xml）。",
        "mipmap：应用启动图标。",
        "values：字符串、样式、颜色等资源（如 string-array）。"
      ]
    },
    {
      title: "6.【定义】什么是 R.java？",
      points: [
        "R.java 是资源索引文件：res 中每个资源都有对应索引。",
        "作用：代码通过 R.layout / R.id / R.string 等引用资源。",
        "特点：res 变化时自动修改，一般不手写维护。"
      ]
    },
    {
      title: "7.【作用】setContentView 做什么？常见写法？",
      points: [
        "在 Activity 的 onCreate 中加载布局，把 XML 界面显示到当前页面。",
        "常见写法：setContentView(R.layout.activity_main)。",
        "必须在绑定控件（findViewById）之前调用，否则找不到控件。"
      ]
    },
    {
      title: "8.【定义】View 与 ViewGroup",
      points: [
        "View：所有 UI 组件的基类，位于 android.view 包，代表视图；TextView 是其子类。",
        "ViewGroup：代表容器，继承 View，是抽象类；实际用其子类（各种布局管理器）当容器。",
        "所有 UI 界面都由 View、ViewGroup 及其子类组合而成。"
      ]
    },
    {
      title: "9.【分类】六种布局管理器及一句话特点",
      points: [
        "LinearLayout：水平或垂直依次排列。",
        "RelativeLayout：相对父容器或兄弟控件定位；新项目基本被 ConstraintLayout 取代。",
        "FrameLayout：默认左上角层叠，后添加的覆盖先添加的。",
        "TableLayout：表格行列；可用 TableRow。",
        "GridLayout：网格，可跨行跨列。",
        "ConstraintLayout：用约束定位置；官方推荐主流根布局。"
      ]
    },
    {
      title: "10.【概念】LinearLayout 的 orientation 与 layout_weight",
      points: [
        "orientation：horizontal 水平排；vertical 垂直排。",
        "layout_weight：按权重分配父布局剩余空间；默认值为 0。",
        "水平 LinearLayout 中，每一列通常只放一个组件；不会自动换行。"
      ]
    },
    {
      title: "11.【概念】RelativeLayout 的定位思路",
      points: [
        "相对布局：子控件相对父容器或相对兄弟控件定位。",
        "可设置对齐父容器边缘、位于某控件之上/之下/左侧/右侧等。",
        "新项目中基本被 ConstraintLayout 取代，但课件仍会考概念。"
      ]
    },
    {
      title: "12.【概念】FrameLayout 的特点与适用场景",
      points: [
        "默认把子组件叠在左上角；后添加的覆盖先添加的。",
        "适合图层叠加、简单叠图、Fragment 容器等场景。",
        "复杂界面不宜只用 FrameLayout 硬叠。"
      ]
    },
    {
      title: "13.【概念】TableLayout 的要点",
      points: [
        "按表格行列摆放；可用 TableRow 表示一行。",
        "列可设置为隐藏、拉伸、收缩。",
        "适合表格式表单，但复杂自适应界面更常用 ConstraintLayout。"
      ]
    },
    {
      title: "14.【概念】GridLayout 的要点",
      points: [
        "网格布局：按行、列划分格子放置控件。",
        "支持跨行、跨列。",
        "适合规则网格排布（如计算器键位一类界面）。"
      ]
    },
    {
      title: "15.【定义】ConstraintLayout 是什么？有何优势？",
      points: [
        "约束布局：用约束关系确定控件位置与尺寸。",
        "Android Studio 新建项目默认、官方推荐的主流根布局。",
        "优势：减少嵌套层级、提高加载效率、可视化拖拽约束方便。"
      ]
    },
    {
      title: "16.【区别】单向约束 vs 双向约束",
      points: [
        "单向：同一方向只约束一边；一侧固定、另一侧自由；宽度常 wrap_content；不便用 bias，也不能用 0dp 填满。",
        "双向：同一方向约束相对两边；控件被限制在两点之间；可用 bias（0.5 居中）；可用 0dp（match_constraint）填满范围。",
        "固定位置至少需要：水平一条 + 垂直一条约束，否则易跑到左上角。"
      ]
    },
    {
      title: "17.【概念】bias、0dp、Guideline 分别是什么",
      points: [
        "bias：双向约束下的偏向比例；0.5 通常表示居中。",
        "0dp（match_constraint）：在双向约束下让控件填满约束范围。",
        "Guideline：看不见的虚拟参考线，只作定位参照，不显示给用户。"
      ]
    },
    {
      title: "18.【区别】gravity vs layout_gravity",
      points: [
        "gravity：控件内部内容的对齐方式。",
        "layout_gravity：控件自身在父容器中的位置。",
        "记法：有 layout_ 的管「自己相对父亲」；没有的管「内部内容」。"
      ]
    },
    {
      title: "19.【区别】Padding vs Margin",
      points: [
        "Padding：内边距（内容与控件边框之间）。",
        "Margin：外边距（控件与周围/父容器之间）。",
        "Padding 影响控件内部留白；Margin 影响控件之间的间距。"
      ]
    },
    {
      title: "20.【概念】布局嵌套的三条规则",
      points: [
        "根布局必须有 xmlns 属性。",
        "一个布局文件最多只能有一个根布局管理器；多个布局要用一个根包起来。",
        "不能嵌套太深：结构复杂，且降低页面加载速度。",
        "能用一层 ConstraintLayout 解决的，就少套多层 LinearLayout。"
      ]
    },
    {
      title: "21.【定义】TextView 与 EditText",
      points: [
        "TextView：显示文本的基础控件；很多控件继承自它（如 Button）。",
        "EditText：可编辑文本框，继承自 TextView。",
        "区别：TextView 主要展示；EditText 可输入、修改。"
      ]
    },
    {
      title: "22.【作用】Button 与事件监听器",
      points: [
        "Button：普通按钮，是 TextView 子类。",
        "必须加事件监听器才起作用，否则点击无业务响应。",
        "设置方式常见两类：① 纯 Java 设置；② Java 与布局文件共同完成。"
      ]
    },
    {
      title: "23.【作用】ImageButton 与 ImageView",
      points: [
        "ImageButton：图片按钮；用 src 指定图片，scaleType 控制缩放。",
        "ImageView：显示图片的控件；同样常用 src、scaleType。",
        "区别：ImageButton 可点击触发事件；ImageView 侧重展示（也可设点击）。"
      ]
    },
    {
      title: "24.【区别】RadioGroup/RadioButton vs CheckBox",
      points: [
        "RadioGroup + RadioButton：一组互斥单选；同一组只能选一个。",
        "CheckBox：多选，可同时勾选多个。",
        "checked 默认多为 false；判断用 isChecked()，取文案用 getText()。"
      ]
    },
    {
      title: "25.【分类】进度条类：ProgressBar / SeekBar / RatingBar",
      points: [
        "ProgressBar：进度条，展示进度。",
        "SeekBar：可拖动的进度条；max 表示最大值，progress 表示当前进度。",
        "RatingBar：星级评分；stepSize 表示每次增减的步进值。"
      ]
    },
    {
      title: "26.【定义】什么是 Adapter？三种常用实现类",
      points: [
        "Adapter 是接口，是 GridView、Spinner、ListView 等与数据之间的桥梁：把数据源转成组件能显示的格式，解耦数据与显示。",
        "三种常用实现：ArrayAdapter、SimpleAdapter、BaseAdapter。",
        "没有 Adapter，列表类控件难以灵活绑定动态数据。"
      ]
    },
    {
      title: "27.【概念】ArrayAdapter 适用与局限",
      points: [
        "数组适配器；使用简单。",
        "常用于 Spinner、ListView 等只需显示简单文本的场景。",
        "局限：通常只方便显示一行文本，复杂 Item 不够用。"
      ]
    },
    {
      title: "28.【概念】SimpleAdapter 的数据源与要点",
      points: [
        "数据源常为 List<Map<String, Object>>。",
        "构造时常用五参数；可同时绑定文字、图片等。",
        "String[] 中的 key 必须与 Map 中的 key 对应，否则绑定失败。"
      ]
    },
    {
      title: "29.【分类】BaseAdapter 必须实现的四个方法",
      points: [
        "getCount()：数据个数。",
        "getItem(position)：对应位置的数据项。",
        "getItemId(position)：该行 ID。",
        "getView(position, convertView, parent)：每一行 Item 的显示内容（convertView 用于复用）。"
      ],
      tip: "简答常要求默写四个方法名 + 一句话职责。"
    },
    {
      title: "30.【作用】GridView 是什么？常用哪个 Adapter？",
      points: [
        "GridView：网格列表，以二维网格形式展示多项。",
        "常配合 BaseAdapter 高度定制每一格内容。",
        "与 ListView 类似都依赖 Adapter，但展示形态是网格而非单列。"
      ]
    },
    {
      title: "31.【区别】Spinner 两种提供列表项的方式",
      points: [
        "列表项可知：放在 values 的 string-array，用 entries=\"@array/数组名\"。",
        "列表项动态：Java 中数组 + ArrayAdapter，再 setAdapter。",
        "取当前项：getSelectedItem() 或 getItemAtPosition(i)。"
      ]
    },
    {
      title: "32.【概念】ListView 的作用与点击监听",
      points: [
        "ListView：垂直滚动的列表控件，通过 Adapter 绑定数据。",
        "列表项可布局指定，也可通过 Adapter 动态指定（与 Spinner 思路类似）。",
        "点击某一项常用 OnItemClickListener。"
      ]
    },
    {
      title: "33.【作用】Toast 与 Log.i",
      points: [
        "Toast.makeText(...).show()：给用户短暂信息提示（方法名是 makeText，m 小写）。",
        "Log.i()：在 Logcat 输出调试信息，方便查运行过程。",
        "Toast 面向用户；Log 面向开发者调试。"
      ]
    },
    {
      title: "34.【定义】Activity 是什么？四大组件有哪些？",
      points: [
        "四大基本组件：Activity、Service、BroadcastReceiver、ContentProvider。",
        "Activity 最常见；中文“活动”，代表手机的一屏，提供与用户交互的可视化界面。",
        "Intent 是信使，不是四大组件之一。"
      ]
    },
    {
      title: "35.【概念】什么是回调？为何生命周期方法都是回调？",
      points: [
        "普通函数：自己的代码主动调用。",
        "回调函数：只重写业务逻辑，不手动调用；由系统在合适时机自动调用。",
        "Activity 生命周期七个方法都是回调：不要自己写 activity.onCreate()。",
        "onCreate 最常用，经常需要重写。"
      ]
    },
    {
      title: "36.【分类】生命周期七方法：时机与作用（总览）",
      points: [
        "onCreate：首次创建；加载布局、初始化、绑定控件；此时界面还不可见。",
        "onStart：可见但还不能交互。",
        "onResume：前台获焦点，可点击；正常运行。",
        "onPause：将失焦点；可保存临时数据；不能做耗时操作。",
        "onStop：完全不可见；释放较占资源资源。",
        "onRestart：从后台回前台前；首次启动不执行。",
        "onDestroy：彻底销毁前；最终清理，防泄漏。"
      ]
    },
    {
      title: "37.【区别】onCreate、onStart、onResume（可见/可交互）",
      points: [
        "onCreate：初始化阶段，界面还不可见。",
        "onStart：已经可见，但还不能与用户交互。",
        "onResume：获得焦点，可接收点击，进入正常运行。"
      ]
    },
    {
      title: "38.【概念】onPause、onStop、onRestart、onDestroy 的注意点",
      points: [
        "onPause：将失焦点；适合保存临时数据；不要做耗时操作。",
        "onStop：完全不可见；适合释放较占内存/资源的对象。",
        "onRestart：仅从后台回到前台前执行；首次启动不执行。",
        "onDestroy：彻底销毁前最后清理；onCreate/onDestroy 通常整段生命周期各执行 1 次。"
      ]
    },
    {
      title: "39.【定义】Intent 与 Bundle（传值）",
      points: [
        "Intent：两个 Activity 之间的信使；启动另一页面并把数据带过去。",
        "Bundle：键值对数据包；可先 put 进 Bundle，再 putExtras 给 Intent。",
        "数据可以是基本类型、数组；对象/对象数组须实现 Serializable 或 Parcelable。",
        "接收方用 getIntent().getExtras() / getXxxExtra，键名必须一致。",
        "关闭当前页用 finish()。"
      ]
    },
    {
      title: "40.【定义】Fragment 是什么？如何创建与添加？",
      points: [
        "Fragment（碎片）：在 Activity 中描述一部分 UI；Activity 是宿主。",
        "一个 Activity 可放多个 Fragment；也可多 Activity 共用；生命周期直接受宿主影响。",
        "创建：写 Fragment 子类；要画 UI 必须重写 onCreateView()，inflate 布局并返回 View（无 UI 可返回 null）。",
        "添加方式：① 布局文件中直接添加；② Activity 运行时动态添加。"
      ]
    }
  ],
  quiz: [
    {
      id: "ess-1",
      type: "简答",
      stem: "写出 Android 系统架构四层（自上而下），并说明 Libraries 与 Runtime 的关系。",
      answerText:
        "应用层 → 应用框架层 → Libraries/Android Runtime → Linux Kernel。Libraries 与 Runtime 同层并列。",
      accept: ["应用", "框架", "runtime", "kernel", "并列", "libraries"],
      explain: "顺序 + 同层。"
    },
    {
      id: "ess-2",
      type: "简答",
      stem: "说明 Project 与 Module 的区别，以及一个工程能否有多个 Module。",
      answerText:
        "Project 是工作空间，Module 是项目/模块；创建后常自动有 app。可以有多个 Module。",
      accept: ["工作空间", "module", "多个", "app"],
      explain: "定义 + 多个 Module。"
    },
    {
      id: "ess-3",
      type: "简答",
      stem: "manifests、java、res 三个节点各自做什么？",
      answerText:
        "manifests：全局配置 AndroidManifest.xml；java：源码包；res：资源文件（R.java 索引）。",
      accept: ["manifest", "java", "res", "配置", "资源"],
      explain: "三节点职责。"
    },
    {
      id: "ess-4",
      type: "简答",
      stem: "AndroidManifest.xml 的作用是什么？Activity 在其中有何要求？",
      answerText:
        "它是应用全局配置文件。每个 Activity 都必须有 <activity> 标记，否则无法启动。",
      accept: ["全局", "配置", "activity", "注册", "标记"],
      explain: "作用 + 注册要求。"
    },
    {
      id: "ess-5",
      type: "简答",
      stem: "简述 drawable、layout、mipmap、values 分别保存什么。",
      answerText:
        "drawable：图片等；layout：布局 XML；mipmap：启动图标；values：字符串/样式/颜色等。",
      accept: ["drawable", "layout", "mipmap", "values", "图标", "布局"],
      explain: "四个目录。"
    },
    {
      id: "ess-6",
      type: "简答",
      stem: "什么是 R.java？它何时更新？代码如何引用资源？",
      answerText:
        "资源索引文件；res 变化时自动修改；用 R.layout / R.id / R.string 等引用。",
      accept: ["索引", "自动", "r.layout", "r.id", "资源"],
      explain: "索引 + 自动 + 引用方式。"
    },
    {
      id: "ess-7",
      type: "简答",
      stem: "setContentView 的作用是什么？常见写法？为何要在 findViewById 之前调用？",
      answerText:
        "在 onCreate 中加载布局。常见 setContentView(R.layout.activity_main)。先加载布局才能通过 id 找到控件。",
      accept: ["加载", "布局", "setcontentview", "findviewbyid", "r.layout"],
      explain: "作用 + 顺序。"
    },
    {
      id: "ess-8",
      type: "简答",
      stem: "什么是 View？什么是 ViewGroup？二者关系？",
      answerText:
        "View 是所有 UI 组件基类；ViewGroup 是容器，继承 View，是抽象类，布局管理器是其子类。界面由二者组合而成。",
      accept: ["基类", "容器", "继承", "抽象", "布局"],
      explain: "定义 + 继承关系。"
    },
    {
      id: "ess-9",
      type: "简答",
      stem: "列出六种布局管理器，并各用一句话概括特点。",
      answerText:
        "Linear 水平/垂直排；Relative 相对定位；Frame 层叠；Table 表格；Grid 网格可跨行跨列；Constraint 约束定位（主流根布局）。",
      accept: ["linear", "relative", "frame", "table", "grid", "constraint"],
      explain: "六种都要提到。"
    },
    {
      id: "ess-10",
      type: "简答",
      stem: "LinearLayout 中 orientation、layout_weight 分别表示什么？默认 weight 是多少？",
      answerText:
        "orientation 决定水平或垂直排列；layout_weight 按权重分剩余空间，默认 0。水平时通常每列一个组件且不自动换行。",
      accept: ["orientation", "weight", "0", "水平", "垂直"],
      explain: "两个属性 + 默认值。"
    },
    {
      id: "ess-11",
      type: "简答",
      stem: "RelativeLayout 的定位思路是什么？新项目中它通常被什么取代？",
      answerText:
        "相对父容器或兄弟控件定位。新项目基本被 ConstraintLayout 取代。",
      accept: ["相对", "父", "兄弟", "constraint"],
      explain: "思路 + 取代关系。"
    },
    {
      id: "ess-12",
      type: "简答",
      stem: "FrameLayout 默认如何摆放多个子组件？适合什么场景？",
      answerText:
        "默认叠在左上角，后添加的覆盖先添加的。适合叠图、图层叠加、Fragment 容器等。",
      accept: ["层叠", "左上", "覆盖", "fragment", "叠"],
      explain: "特点 + 场景。"
    },
    {
      id: "ess-13",
      type: "简答",
      stem: "TableLayout 如何组织界面？列可以做哪些设置？",
      answerText:
        "按表格行列摆放，可用 TableRow。列可隐藏、拉伸、收缩。",
      accept: ["表格", "tablerow", "隐藏", "拉伸", "收缩"],
      explain: "结构 + 列属性。"
    },
    {
      id: "ess-14",
      type: "简答",
      stem: "GridLayout 的核心特点是什么？",
      answerText: "按网格行列放置控件，支持跨行、跨列，适合规则网格排布。",
      accept: ["网格", "跨行", "跨列", "行列"],
      explain: "网格 + 跨行跨列。"
    },
    {
      id: "ess-15",
      type: "简答",
      stem: "ConstraintLayout 是什么？有哪些优势？",
      answerText:
        "用约束确定位置与尺寸的布局；新建项目默认、官方推荐。优势：减少嵌套、提高加载效率、可视化约束方便。",
      accept: ["约束", "默认", "嵌套", "推荐", "效率"],
      explain: "定义 + 优势。"
    },
    {
      id: "ess-16",
      type: "简答",
      stem: "单向约束与双向约束有何区别？bias、0dp 分别在什么情况下可用？",
      answerText:
        "单向只约束一边，另一侧自由，通常 wrap_content，不便用 bias/0dp。双向两端都约束，可用 bias 调偏向，可用 0dp 填满范围。",
      accept: ["单向", "双向", "bias", "0dp", "wrap"],
      explain: "对比写清。"
    },
    {
      id: "ess-17",
      type: "简答",
      stem: "解释 bias、0dp（match_constraint）、Guideline 的含义。",
      answerText:
        "bias 是双向约束下的偏向比例，0.5 常表示居中；0dp 在双向约束下填满范围；Guideline 是不可见参考线。",
      accept: ["bias", "0dp", "guideline", "居中", "参考"],
      explain: "三个概念。"
    },
    {
      id: "ess-18",
      type: "简答",
      stem: "gravity 与 layout_gravity 的区别是什么？",
      answerText:
        "gravity：内容在控件内对齐；layout_gravity：控件在父容器中的位置。",
      accept: ["gravity", "layout_gravity", "内容", "父", "位置"],
      explain: "内外对齐。"
    },
    {
      id: "ess-19",
      type: "简答",
      stem: "Padding 与 Margin 的区别是什么？",
      answerText: "Padding 是内边距（内容与边框之间）；Margin 是外边距（控件与周围之间）。",
      accept: ["padding", "margin", "内", "外"],
      explain: "内外边距。"
    },
    {
      id: "ess-20",
      type: "简答",
      stem: "布局嵌套有哪些必须遵守的规则？为何不能嵌套太深？",
      answerText:
        "根布局要有 xmlns；一个文件最多一个根布局；多布局要用根包起来。嵌套太深会复杂并降低加载速度。",
      accept: ["xmlns", "一个根", "嵌套", "加载", "速度"],
      explain: "规则 + 原因。"
    },
    {
      id: "ess-21",
      type: "简答",
      stem: "TextView 与 EditText 分别是什么？二者关系与区别？",
      answerText:
        "TextView 显示文本；EditText 可编辑输入，继承自 TextView。区别在于一个侧重展示，一个可输入修改。",
      accept: ["textview", "edittext", "继承", "输入", "显示"],
      explain: "定义 + 继承。"
    },
    {
      id: "ess-22",
      type: "简答",
      stem: "Button 为什么必须设置监听器？常用有哪两类设置方式？",
      answerText:
        "不加监听器按钮没有业务响应。方式：① 纯 Java 设置；② Java 与布局文件共同完成。",
      accept: ["监听", "java", "布局", "onclick"],
      explain: "作用 + 方式。"
    },
    {
      id: "ess-23",
      type: "简答",
      stem: "ImageButton 用什么属性指定图片？它和 ImageView 有何侧重不同？",
      answerText:
        "用 src 指定图片，scaleType 控制缩放。ImageButton 侧重可点击按钮；ImageView 侧重展示图片。",
      accept: ["src", "scaletype", "按钮", "展示", "image"],
      explain: "属性 + 区别。"
    },
    {
      id: "ess-24",
      type: "简答",
      stem: "RadioGroup/RadioButton 与 CheckBox 有何区别？如何判断是否选中？",
      answerText:
        "前者是互斥单选，后者可多选。用 isChecked() 判断，用 getText() 取文案；checked 默认常为 false。",
      accept: ["单选", "多选", "ischecked", "互斥", "checkbox"],
      explain: "单选多选 + API。"
    },
    {
      id: "ess-25",
      type: "简答",
      stem: "简述 ProgressBar、SeekBar、RatingBar 的作用，并说明 SeekBar 的 max/progress、RatingBar 的 stepSize。",
      answerText:
        "ProgressBar 显示进度；SeekBar 可拖动，max 最大值、progress 当前值；RatingBar 星级评分，stepSize 为步进。",
      accept: ["progressbar", "seekbar", "ratingbar", "max", "stepsize"],
      explain: "三类 + 关键属性。"
    },
    {
      id: "ess-26",
      type: "简答",
      stem: "什么是 Adapter？三种常用实现类是什么？",
      answerText:
        "Adapter 是列表类控件与数据的桥梁。三种：ArrayAdapter、SimpleAdapter、BaseAdapter。",
      accept: ["桥梁", "arrayadapter", "simpleadapter", "baseadapter"],
      explain: "定义 + 三实现。"
    },
    {
      id: "ess-27",
      type: "简答",
      stem: "ArrayAdapter 适合什么场景？主要局限是什么？",
      answerText:
        "适合 Spinner/ListView 等简单一行文本显示；局限是通常只方便显示一行文本，复杂 Item 不够用。",
      accept: ["一行", "文本", "简单", "spinner", "listview"],
      explain: "适用 + 局限。"
    },
    {
      id: "ess-28",
      type: "简答",
      stem: "SimpleAdapter 的数据源通常是什么？key 有何要求？",
      answerText:
        "通常是 List<Map>；构造常用五参数；String[] 的 key 必须与 Map 中的 key 对应。",
      accept: ["list", "map", "key", "对应", "五"],
      explain: "数据源 + key 对应。"
    },
    {
      id: "ess-29",
      type: "简答",
      stem: "默写 BaseAdapter 四个方法，并各用一句话说明职责。",
      answerText:
        "getCount：个数；getItem：取数据项；getItemId：行 ID；getView：生成/复用每一行视图。",
      accept: ["getcount", "getitem", "getitemid", "getview"],
      explain: "四方法必须齐。"
    },
    {
      id: "ess-30",
      type: "简答",
      stem: "GridView 是什么？常配合哪个 Adapter？与 ListView 展示形态有何不同？",
      answerText:
        "网格列表控件，常配合 BaseAdapter。ListView 是单列垂直列表，GridView 是二维网格。",
      accept: ["网格", "baseadapter", "listview", "二维"],
      explain: "定义 + 对比。"
    },
    {
      id: "ess-31",
      type: "简答",
      stem: "Spinner 如何提供列表项？（分“可知”和“动态”两种）如何取当前项？",
      answerText:
        "可知：string-array + entries。动态：数组 + ArrayAdapter + setAdapter。取当前项用 getSelectedItem() 或 getItemAtPosition。",
      accept: ["entries", "string-array", "arrayadapter", "setadapter", "getselecteditem"],
      explain: "两种方式 + 取值。"
    },
    {
      id: "ess-32",
      type: "简答",
      stem: "ListView 的作用是什么？点击某一项常用什么监听？",
      answerText:
        "垂直滚动列表，通过 Adapter 绑定数据。点击某一项常用 OnItemClickListener。",
      accept: ["列表", "adapter", "onitemclick", "点击"],
      explain: "作用 + 监听。"
    },
    {
      id: "ess-33",
      type: "简答",
      stem: "Toast 与 Log.i 分别做什么？Toast 正确方法名是什么？",
      answerText:
        "Toast 给用户短暂提示，写法 Toast.makeText(...).show()；Log.i 在 Logcat 输出调试信息给开发者。",
      accept: ["maketext", "toast", "log", "用户", "调试"],
      explain: "对象不同 + makeText。"
    },
    {
      id: "ess-34",
      type: "简答",
      stem: "什么是 Activity？Android 四大基本组件是哪些？Intent 是不是四大组件？",
      answerText:
        "Activity 代表一屏交互界面。四大组件：Activity、Service、BroadcastReceiver、ContentProvider。Intent 不是，它是信使。",
      accept: ["一屏", "activity", "service", "broadcast", "contentprovider", "信使"],
      explain: "定义 + 四组件 + Intent。"
    },
    {
      id: "ess-35",
      type: "简答",
      stem: "什么是回调函数？为什么不要手动调用 onCreate？",
      answerText:
        "回调只重写逻辑，由系统在适当时机自动调用。生命周期方法都是回调，业务代码不应手动 activity.onCreate()。",
      accept: ["系统", "自动", "重写", "回调", "oncreate"],
      explain: "回调定义是得分点。"
    },
    {
      id: "ess-36",
      type: "简答",
      stem: "按顺序列出 Activity 生命周期七个方法，并各用一句话说明时机。",
      answerText:
        "onCreate 创建初始化；onStart 可见不可交互；onResume 可交互；onPause 将失焦点；onStop 不可见；onRestart 从后台回前台前；onDestroy 销毁清理。",
      accept: ["oncreate", "onstart", "onresume", "onpause", "onstop", "onrestart", "ondestroy"],
      explain: "七方法齐全。"
    },
    {
      id: "ess-37",
      type: "简答",
      stem: "简述 onCreate、onStart、onResume 在“可见/可交互”上的差别。",
      answerText:
        "onCreate：初始化，界面还不可见；onStart：可见但不能交互；onResume：获焦点，可点击交互。",
      accept: ["不可见", "可见", "交互", "焦点"],
      explain: "三阶段对比。"
    },
    {
      id: "ess-38",
      type: "简答",
      stem: "说明 onPause、onStop、onRestart、onDestroy 各自注意点；onCreate/onDestroy 执行次数有何特点？",
      answerText:
        "onPause 保存临时数据且勿耗时；onStop 释放资源；onRestart 首次不执行；onDestroy 最终清理。onCreate/onDestroy 通常各执行一次。",
      accept: ["onpause", "onstop", "onrestart", "ondestroy", "一次"],
      explain: "注意点 + 次数。"
    },
    {
      id: "ess-39",
      type: "简答",
      stem: "Intent 和 Bundle 分别是什么？如何配合完成页面传值？关闭 Activity 用什么方法？",
      answerText:
        "Intent 是两 Activity 间的信使；Bundle 是键值对数据包。数据可放 Bundle，再 putExtras 给 Intent，目标页按相同键取出。关闭用 finish()。",
      accept: ["信使", "bundle", "键值", "putextra", "finish"],
      explain: "定义 + 传值 + finish。"
    },
    {
      id: "ess-40",
      type: "简答",
      stem: "什么是 Fragment？生命周期与谁有关？如何创建带界面的 Fragment？如何加入 Activity？",
      answerText:
        "Fragment 是 Activity 中一部分 UI，宿主是 Activity，生命周期受宿主影响。重写 onCreateView inflate 返回 View。可布局静态添加或运行时动态添加。",
      accept: ["宿主", "oncreateview", "inflate", "布局", "运行时", "生命周期"],
      explain: "定义 + 创建 + 添加。"
    }
  ]
};
