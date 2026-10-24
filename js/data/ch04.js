window.CHAPTER_04 = {
  id: "ch04",
  no: "第四章",
  title: "常用 UI 组件",
  examWeight: "控件 + 监听 + Adapter 是重点",
  knowledge: [
    {
      title: "知识框架（课件原结构）",
      points: [
        "文本类：TextView、EditText",
        "按钮类：Button、ImageButton、RadioGroup/RadioButton、CheckBox",
        "进度条类：ProgressBar（后讲）、SeekBar、RatingBar",
        "图像类：ImageView、GridView（含 Adapter）",
        "列表类：Spinner、ListView"
      ]
    },
    {
      title: "4.1.1 TextView",
      points: [
        "用于在页面中显示文本；标记 <TextView>。",
        "常用属性：gravity（文本对齐）、hint（提示）、singleLine（是否单行）、text、textColor、textSize、width、height、maxWidth。"
      ]
    },
    {
      title: "4.1.2 EditText",
      points: [
        "编辑文字的组件；标记 <EditText>；继承 TextView。",
        "常用属性：lines（行数，超出自动滚动）、inputType（密码、日期、电话等）、gravity（文字位置）、layout_gravity（在父容器中的位置）。"
      ]
    },
    {
      title: "4.2.1 Button（普通按钮）",
      points: [
        "是 TextView 的子类；标记 <Button>。",
        "必须添加事件监听器，按钮才有作用。",
        "有动作触发监听器时，执行监听器里的代码。",
        "设置监听器的常用方法：① 只在 Java 代码中完成；② 在 Java 代码和布局文件中共同完成；还有其它方法。"
      ]
    },
    {
      title: "4.2.2 ImageButton",
      points: [
        "标记 <ImageButton>。",
        "src：按钮上显示的图片。",
        "scaleType：图片缩放方式。"
      ]
    },
    {
      title: "4.2.3 RadioGroup / RadioButton",
      points: [
        "<RadioGroup>：单选按钮组；<RadioButton>：单选按钮。",
        "checked：是否选中，默认 false。",
        "getText()：获取显示内容；isChecked()：是否选中。"
      ]
    },
    {
      title: "4.2.4 CheckBox",
      points: [
        "标记 <CheckBox>。",
        "checked：是否选中。",
        "getText()：获取显示内容；isChecked()：是否选中。"
      ]
    },
    {
      title: "4.3 进度条类",
      points: [
        "ProgressBar（课件写作 ProgramBar）：课件说明讲完多线程后再讲。",
        "SeekBar（拖动条）：max 最大值；progress 当前值（课件有处写作 program）。",
        "SeekBar 常配合监听 OnSeekBarChangeListener；课件例：拖动改变 ImageView 透明度（setImageAlpha）或旋转角度（setRotation）。",
        "RatingBar（星级评分）：numStars（星星总数）、rating（默认星级）、stepSize（每次最少改变多少星，默认半个）。",
        "RatingBar 可用 OnRatingBarChangeListener；也可用 getRating() 取值，常配合 Toast 提示。"
      ]
    },
    {
      title: "4.4.1 ImageView",
      points: [
        "标记 <ImageView>。",
        "src：图像源（drawable 或 mipmap 中的图片）。",
        "scaleType：图片如何缩放或移动以适应 ImageView；课件例使用 fitXY。"
      ]
    },
    {
      title: "4.4.2 Adapter（必会）",
      points: [
        "Adapter 是接口，代表适配器对象。",
        "是 GridView、Spinner、ListView 等组件与数据之间的桥梁：处理数据并绑定到组件。",
        "作用：把各种各样的数据源转换成组件能显示的格式，解耦数据与显示。",
        "常用实现类三种：ArrayAdapter、SimpleAdapter、BaseAdapter。"
      ]
    },
    {
      title: "ArrayAdapter",
      points: [
        "数组适配器；常用于 Spinner、ListView。",
        "以类似数组方式存数据；较简单；局限是通常只方便显示一行文本。",
        "构造：ArrayAdapter<>(context, item布局, 数据源)。",
        "参数：① this（上下文）；② 每一项样式（可用系统布局，如一行文本、两行文本、带单选/复选的列表项，也可自定义 TextView 布局）；③ 数据源。"
      ]
    },
    {
      title: "SimpleAdapter",
      points: [
        "简单适配器，名字简单但功能强；常用于 ListView。",
        "五个参数：SimpleAdapter(上下文, List<Map>, item布局, String[] keys, int[] viewIds)。",
        "① 上下文；② 数据源是含 Map 的集合；③ 每一项的布局文件；④ String[] 中的 key 必须与 Map 的 key 一一对应；⑤ int[] 是 item 布局里控件的 id，与 key 顺序对应。"
      ]
    },
    {
      title: "BaseAdapter",
      points: [
        "可最大限度定制列表项，灵活性高；GridView 常通过继承它实现。",
        "必须实现四个方法：",
        "getCount()：数据个数；",
        "getItem(position)：对应位置的数据项；",
        "getItemId(position)：该行 ID；",
        "getView(position, convertView, parent)：每一行 Item 的显示内容。"
      ],
      tip: "考试常默写 BaseAdapter 四个方法名与职责。"
    },
    {
      title: "4.4.2 GridView",
      points: [
        "标记 <GridView>；以网格形式展示多项。",
        "数据常通过 Adapter（尤其 BaseAdapter）绑定；课件其它属性略。"
      ]
    },
    {
      title: "4.5.1 Spinner（下拉列表）",
      points: [
        "提供一系列列表项供选择；标记 <Spinner>。",
        "列表项可知：放在数组资源（string-array）里，用 entries=\"@array/数组名\"。",
        "列表项不可知或要动态指定：Java 里用数组 + ArrayAdapter，再 setAdapter。",
        "选中监听：setOnItemSelectedListener；取当前项可用 getSelectedItem() 或 adapterView.getItemAtPosition(i)。"
      ]
    },
    {
      title: "4.5.2 ListView",
      points: [
        "标记 <ListView>。",
        "与 Spinner 一样：可在布局里指定列表项，也可通过 Adapter 指定。",
        "可用 ArrayAdapter 显示纯文字列表；可用 SimpleAdapter 同时绑定图片和文字（Map + 自定义 item 布局）。",
        "点击监听：setOnItemClickListener；常用 getItemAtPosition(i) 取选中项。"
      ]
    },
    {
      title: "本章总结（课件原条）",
      points: [
        "会根据需求灵活使用常用组件。",
        "掌握常用事件监听方法。",
        "熟悉 Adapter：ArrayAdapter、SimpleAdapter、BaseAdapter。",
        "会编写 values 文件（如 string-array）。",
        "掌握图片在 Module 中的存放位置与使用（drawable / mipmap）。",
        "Toast.makeText(...).show() 做信息提示（课件总结写成 Toast.MakeText，实际方法名是 makeText）。",
        "会用 Log.i()。",
        "会改简单语法错误、运行时错误。"
      ]
    }
  ],
  quiz: [
    {
      id: "c4q1",
      type: "单选",
      stem: "EditText 继承自？",
      options: ["Button", "TextView", "ImageView", "ViewGroup"],
      answer: [1],
      explain: "课件：EditText 继承 TextView。"
    },
    {
      id: "c4q2",
      type: "单选",
      stem: "Button 要想起作用，课件强调必须？",
      options: ["设置 background", "添加事件监听器", "放进 GridView", "写成静态方法"],
      answer: [1],
      explain: "需要为按钮添加事件监听器，才能让按钮发挥作用。"
    },
    {
      id: "c4q3",
      type: "单选",
      stem: "ImageButton 中指定按钮图片的属性是？",
      options: ["text", "hint", "src", "entries"],
      answer: [2],
      explain: "src 指定按钮上显示的图片。"
    },
    {
      id: "c4q4",
      type: "单选",
      stem: "一组互斥单选项应使用？",
      options: ["多个独立 CheckBox", "RadioGroup + RadioButton", "只有 SeekBar", "只有 RatingBar"],
      answer: [1],
      explain: "RadioGroup 是按钮组，内放 RadioButton。"
    },
    {
      id: "c4q5",
      type: "单选",
      stem: "判断 CheckBox / RadioButton 是否选中，常用？",
      options: ["getText()", "isChecked()", "getCount()", "setAdapter()"],
      answer: [1],
      explain: "isChecked() 判断是否选中；getText() 取显示内容。"
    },
    {
      id: "c4q6",
      type: "单选",
      stem: "SeekBar 的 max 与 progress 分别表示？",
      options: [
        "最小值；步长",
        "最大值；当前值",
        "星星数；半星",
        "行数；列数"
      ],
      answer: [1],
      explain: "课件：max 最大值，progress 当前值。"
    },
    {
      id: "c4q7",
      type: "单选",
      stem: "RatingBar 中 stepSize 的含义是？",
      options: [
        "星星总数",
        "默认星级",
        "每次最少改变多少个星级，默认半个",
        "图片透明度"
      ],
      answer: [2],
      explain: "stepSize：每次最少改变多少星级，默认半个。"
    },
    {
      id: "c4q8",
      type: "单选",
      stem: "Adapter 的作用，课件概括为？",
      options: [
        "只负责画布局边框",
        "组件与数据之间的桥梁，绑定数据到 GridView/Spinner/ListView 等",
        "替代 Activity",
        "只用于 ProgressBar"
      ],
      answer: [1],
      explain: "Adapter 是组件与数据之间的桥梁。"
    },
    {
      id: "c4q9",
      type: "单选",
      stem: "只能较方便地显示一行文本的适配器是？",
      options: ["BaseAdapter", "SimpleAdapter", "ArrayAdapter", "ViewGroup"],
      answer: [2],
      explain: "ArrayAdapter 较简单，有局限性，只能显示一行文本数据。"
    },
    {
      id: "c4q10",
      type: "单选",
      stem: "SimpleAdapter 的数据源通常是？",
      options: [
        "单个 String",
        "含有 Map 的集合（List<Map>）",
        "只有 int",
        "AndroidManifest.xml"
      ],
      answer: [1],
      explain: "第二个参数：数据源是含有 Map 的一个集合。"
    },
    {
      id: "c4q11",
      type: "单选",
      stem: "BaseAdapter 中负责生成每一行显示内容的方法是？",
      options: ["getCount()", "getItem()", "getItemId()", "getView()"],
      answer: [3],
      explain: "getView 获取每一行 Item 的显示内容。"
    },
    {
      id: "c4q12",
      type: "单选",
      stem: "列表项内容已知且固定时，Spinner 可用？",
      options: [
        "只能手写 BaseAdapter",
        "entries 指向 values 里的 string-array",
        "只能用 RatingBar",
        "必须用 FrameLayout"
      ],
      answer: [1],
      explain: "可知时保存在数组资源中，用 entries=\"@array/数组名\"。"
    },
    {
      id: "c4q13",
      type: "单选",
      stem: "Spinner 动态指定列表项时，课件做法是？",
      options: [
        "只改 AndroidManifest",
        "Java 数组 + ArrayAdapter + setAdapter",
        "只用 XML 的 checked",
        "调用 finish()"
      ],
      answer: [1],
      explain: "例 4-5-1-2：数组保存项，ArrayAdapter 关联后再 setAdapter。"
    },
    {
      id: "c4q14",
      type: "单选",
      stem: "ListView 点击某一项时，课件常用的监听是？",
      options: [
        "OnCheckedChangeListener",
        "OnItemClickListener",
        "OnRatingBarChangeListener",
        "OnSeekBarChangeListener"
      ],
      answer: [1],
      explain: "setOnItemClickListener；并用 getItemAtPosition 取值。"
    },
    {
      id: "c4q15",
      type: "多选",
      stem: "课件列出的三种常用 Adapter 实现类是？",
      options: ["ArrayAdapter", "SimpleAdapter", "BaseAdapter", "AppCompatActivity"],
      answer: [0, 1, 2],
      explain: "三种：ArrayAdapter、SimpleAdapter、BaseAdapter。"
    },
    {
      id: "c4q16",
      type: "多选",
      stem: "BaseAdapter 必须实现的方法包括？",
      options: ["getCount", "getItem", "getItemId", "getView", "onCreate"],
      answer: [0, 1, 2, 3],
      explain: "四个适配器方法；onCreate 是 Activity 生命周期方法。"
    },
    {
      id: "c4q17",
      type: "多选",
      stem: "关于 Spinner 取当前选中项，课件提到可用？",
      options: [
        "spinner.getSelectedItem().toString()",
        "adapterView.getItemAtPosition(i).toString()",
        "getCount() 直接当选中文本",
        "只能用 Log.i"
      ],
      answer: [0, 1],
      explain: "两种写法效果相同，课件都有示范。"
    },
    {
      id: "c4q18",
      type: "判断",
      stem: "设置监听器的方法只有“全部写在 Java 里”这一种。",
      options: ["对", "错"],
      answer: [1],
      explain: "课件：可在 Java 完成，也可 Java 与布局文件共同完成，还有其它方法。"
    },
    {
      id: "c4q19",
      type: "判断",
      stem: "RadioButton 的 checked 默认是 true。",
      options: ["对", "错"],
      answer: [1],
      explain: "默认 false，未选中。"
    },
    {
      id: "c4q20",
      type: "判断",
      stem: "SimpleAdapter 的 String[] key 必须与 Map 中的 key 对应。",
      options: ["对", "错"],
      answer: [0],
      explain: "第四个参数要与 Map 的 key 一一对应。"
    },
    {
      id: "c4q21",
      type: "判断",
      stem: "ListView 与 Spinner 一样，既可在布局指定列表项，也可通过 Adapter 指定。",
      options: ["对", "错"],
      answer: [0],
      explain: "课件原话如此。"
    },
    {
      id: "c4q22",
      type: "填空",
      stem: "信息提示常用 ______ 方法（写出 makeText 那一套调用习惯即可）。",
      answerText: "Toast.makeText(...).show()",
      accept: ["toast", "maketext", "makeText", "Toast"],
      explain: "课件总结写 Toast.MakeText，实际是 Toast.makeText(...).show()。"
    },
    {
      id: "c4q23",
      type: "填空",
      stem: "Adapter 常用三种实现类：ArrayAdapter、SimpleAdapter、______。",
      answerText: "BaseAdapter",
      accept: ["baseadapter", "BaseAdapter"],
      explain: "三种适配器：ArrayAdapter、SimpleAdapter、BaseAdapter。"
    }
  ]
};
