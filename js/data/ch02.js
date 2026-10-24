window.CHAPTER_02 = {
  id: "ch02",
  no: "第二章",
  title: "运行第一个 Android 程序",
  examWeight: "项目结构与运行方式是重点",
  knowledge: [
    {
      title: "知识框架（课件原结构）",
      points: [
        "2.1 创建 Android 应用程序：Project 与 Module。",
        "2.2 Android 项目结构：manifests / java / res 三个常用节点，以及 res 子目录。",
        "2.3 运行 Android 应用：自带模拟器、第三方模拟器、真机。"
      ]
    },
    {
      title: "2.1 Project 和 Module",
      points: [
        "Project 指工作空间；Module 指一个项目（应用模块）。",
        "创建 Project 后，会自动创建一个名为 app 的 Module。",
        "同一个 Project 下还可以再建多个 Module（课件截图里有 app、app2、app3、app4）。",
        "运行前要在工具栏下拉框里选对要运行的 Module，再点绿色 Run（快捷键 Shift+F10）。"
      ]
    },
    {
      title: "2.2 项目视图与三个常用节点",
      points: [
        "Android Studio 左侧可用多种项目结构视图；课件重点用 Android 视图。",
        "Android 视图下，每个 Module 里最常用的三个节点：manifests、java、res。",
        "下方还有 Gradle Scripts（build.gradle 等），用于构建配置。"
      ]
    },
    {
      title: "manifests 节点",
      points: [
        "显示应用程序的配置文件，也就是整个 Android 应用的全局描述文件。",
        "对应文件：AndroidManifest.xml。",
        "每个 Activity 在该文件中都必须有一个 <activity> 标记。",
        "启动页通常带 MAIN / LAUNCHER 的 intent-filter（课件截图中的 MainActivity）。"
      ],
      tip: "忘了在 Manifest 里注册 Activity，运行时会找不到页面。"
    },
    {
      title: "java 节点",
      points: [
        "显示 Android 程序的所有包及源文件。",
        "业务代码（如 MainActivity.java）放在这里。",
        "常见写法：MainActivity 继承 AppCompatActivity，在 onCreate 里 setContentView(R.layout.activity_main)。"
      ]
    },
    {
      title: "res 节点与 R.java",
      points: [
        "res 节点显示保存在 res 目录下的资源文件。",
        "每个资源在 R.java 中都有一个索引。",
        "res 中资源发生变化时，R.java 会自动修改。",
        "代码里通过 R.layout.xxx、R.id.xxx、R.string.xxx 等方式引用资源。"
      ]
    },
    {
      title: "res 的四个子目录（必背）",
      table: {
        headers: ["子目录", "保存内容"],
        rows: [
          ["drawable", "图片资源：PNG、JPEG、GIF、9-Patch、Shape 等"],
          ["layout", "布局文件（如 activity_main.xml）"],
          ["mipmap", "应用启动图标"],
          ["values", "字符串、样式、颜色等资源"]
        ]
      },
      tip: "启动图标看 mipmap；界面布局看 layout；文案颜色看 values；一般图片看 drawable。"
    },
    {
      title: "常用操作：修改编辑器字体",
      points: [
        "路径：File → Settings（Ctrl+Alt+S）→ Editor → Colors & Fonts → Font。",
        "可改 Primary font、Size、Line spacing。"
      ]
    },
    {
      title: "2.3 用自带模拟器运行",
      points: [
        "步骤：创建模拟器 → 启动模拟器 → 再运行应用。",
        "创建时选择设备定义（如 Nexus 系列），并指定 API 级别 / 系统镜像。",
        "Run 后在 Select Deployment Target 里选 Available Virtual Devices。"
      ]
    },
    {
      title: "2.3 用第三方模拟器运行",
      points: [
        "课件举例：海马玩、夜神、逍遥等。",
        "需要让 Android Studio 识别第三方模拟器。",
        "步骤概要：先启动第三方模拟器 → 配置环境变量 → 用 Terminal 连上 adb → 再在 Studio 里运行。",
        "环境变量：新建系统变量 AS，值为 SDK 下的 platform-tools 目录（例：C:\\Android\\sdk\\platform-tools）。",
        "再在系统 Path 中添加 %AS%;",
        "打开 Terminal：快捷键 Alt+F12。",
        "连接命令：adb connect 127.0.0.1:端口号（课件示例先失败后成功连到 26944，端口因模拟器而异）。",
        "连上后，Deployment Target 的 Connected Devices 里会出现该模拟器。"
      ]
    },
    {
      title: "2.3 真机测试",
      points: [
        "手机用数据线连电脑。",
        "安装设备驱动程序（课件提到可借助电脑管家 / 应用宝一类工具辅助）。",
        "授权电脑管理手机。",
        "手机打开开发者模式，并允许 USB 调试。",
        "不同手机进入开发者模式的方式可能不同，按提示操作即可。"
      ]
    }
  ],
  quiz: [
    {
      id: "c2q1",
      type: "单选",
      stem: "关于 Project 与 Module，课件的说法是？",
      options: [
        "Project 是一个页面，Module 是一张布局",
        "Project 指工作空间，Module 指一个项目；创建 Project 后会自动有 app Module",
        "一个 Project 只能有一个 Module",
        "Module 就是 AndroidManifest.xml"
      ],
      answer: [1],
      explain: "课件原文：Project 指工作空间，Module 指一个项目；创建后自动有 app，还可再建多个 Module。"
    },
    {
      id: "c2q2",
      type: "单选",
      stem: "Android 视图下，课件强调的三个常用节点是？",
      options: [
        "build、gradle、idea",
        "manifests、java、res",
        "drawable、mipmap、values",
        "apk、aab、hap"
      ],
      answer: [1],
      explain: "三个常用节点：manifests、java、res。"
    },
    {
      id: "c2q3",
      type: "单选",
      stem: "manifests 节点主要显示什么？",
      options: [
        "布局 XML",
        "应用程序配置文件（全局描述文件）",
        "图片资源",
        "Gradle 缓存"
      ],
      answer: [1],
      explain: "manifests 显示配置文件，是整个应用的全局文件描述。"
    },
    {
      id: "c2q4",
      type: "单选",
      stem: "每个 Activity 在 Manifest 中必须有？",
      options: ["一个 <service> 标记", "一个 <activity> 标记", "一个 <receiver> 标记", "一个 <provider> 标记"],
      answer: [1],
      explain: "课件明确：每个 Activity 都必须有一个 <activity> 标记。"
    },
    {
      id: "c2q5",
      type: "单选",
      stem: "java 节点的作用是？",
      options: [
        "保存启动图标",
        "显示所有包及源文件",
        "保存颜色字符串",
        "只保存测试代码"
      ],
      answer: [1],
      explain: "java 节点显示程序的所有包及源文件。"
    },
    {
      id: "c2q6",
      type: "单选",
      stem: "关于 R.java，正确的是？",
      options: [
        "必须手写维护",
        "每个 res 资源在其中有索引；res 变化时它会自动修改",
        "只索引 drawable，不索引 layout",
        "放在 manifests 节点里"
      ],
      answer: [1],
      explain: "资源在 R.java 有索引；res 变化时自动更新。"
    },
    {
      id: "c2q7",
      type: "单选",
      stem: "应用启动图标应放在哪个目录？",
      options: ["layout", "values", "mipmap", "java"],
      answer: [2],
      explain: "mipmap 保存项目中应用的启动图标。"
    },
    {
      id: "c2q8",
      type: "单选",
      stem: "activity_main.xml 这类界面布局文件应放在？",
      options: ["drawable", "layout", "mipmap", "values"],
      answer: [1],
      explain: "layout 保存布局文件。"
    },
    {
      id: "c2q9",
      type: "单选",
      stem: "字符串、样式、颜色资源通常放在？",
      options: ["drawable", "layout", "mipmap", "values"],
      answer: [3],
      explain: "values 保存字符串、样式和颜色等。"
    },
    {
      id: "c2q10",
      type: "单选",
      stem: "PNG、JPEG、Shape 等图片资源放在？",
      options: ["drawable", "mipmap", "values", "manifests"],
      answer: [0],
      explain: "drawable 保存图片资源：PNG、JPEG、GIF、9-Patch、Shape 等。"
    },
    {
      id: "c2q11",
      type: "单选",
      stem: "用自带模拟器运行时，课件给出的先后顺序是？",
      options: [
        "先 Run，再创建模拟器",
        "创建模拟器 → 启动模拟器",
        "先配 Path，再装 Git",
        "先写 adb uninstall"
      ],
      answer: [1],
      explain: "课件：创建模拟器，再启动模拟器。"
    },
    {
      id: "c2q12",
      type: "单选",
      stem: "为让 Studio 识别第三方模拟器，课件新建的系统环境变量名是？",
      options: ["ANDROID_HOME", "AS", "JAVA_HOME", "ADB_PORT"],
      answer: [1],
      explain: "新建系统环境变量 AS，值为 sdk 下的 platform-tools。"
    },
    {
      id: "c2q13",
      type: "单选",
      stem: "环境变量 AS 的值应指向？",
      options: [
        "JDK 安装目录",
        "SDK 下的 platform-tools 文件夹",
        "项目的 app 目录",
        "res/layout 目录"
      ],
      answer: [1],
      explain: "AS = 你的 sdk 目录下的 platform-tools。"
    },
    {
      id: "c2q14",
      type: "单选",
      stem: "Android Studio 中打开 Terminal 的快捷键（课件）是？",
      options: ["Ctrl+Alt+S", "Shift+F10", "Alt+F12", "Ctrl+F12"],
      answer: [2],
      explain: "课件：Alt+F12 打开 Terminal。"
    },
    {
      id: "c2q15",
      type: "单选",
      stem: "连接第三方模拟器时，课件使用的命令形式是？",
      options: [
        "gradlew assemble",
        "adb connect 127.0.0.1:端口号",
        "git push",
        "flutter build apk"
      ],
      answer: [1],
      explain: "课件示例：adb connect 127.0.0.1:端口。"
    },
    {
      id: "c2q16",
      type: "多选",
      stem: "课件提到的第三方模拟器包括？",
      options: ["海马玩", "夜神", "逍遥", "Xcode Simulator"],
      answer: [0, 1, 2],
      explain: "海马玩、夜神、逍遥；Xcode Simulator 是苹果侧。"
    },
    {
      id: "c2q17",
      type: "多选",
      stem: "真机测试时，课件提到需要做的有？",
      options: [
        "数据线连接电脑",
        "安装设备驱动",
        "打开开发者模式并允许 USB 调试",
        "必须关闭电脑上的 JDK"
      ],
      answer: [0, 1, 2],
      explain: "连线、装驱动、授权、开发者模式、USB 调试；不同机型入口可能不同。"
    },
    {
      id: "c2q18",
      type: "判断",
      stem: "同一个 Project 下可以创建多个 Module。",
      options: ["对", "错"],
      answer: [0],
      explain: "课件明确可以创建多个 Module。"
    },
    {
      id: "c2q19",
      type: "判断",
      stem: "res 中新增资源后，必须手动改写 R.java。",
      options: ["对", "错"],
      answer: [1],
      explain: "R.java 会自动修改。"
    },
    {
      id: "c2q20",
      type: "判断",
      stem: "设置系统变量 AS 后，还需要在 Path 中添加 %AS%;",
      options: ["对", "错"],
      answer: [0],
      explain: "课件要求在 Path 后添加 %AS%;"
    },
    {
      id: "c2q21",
      type: "填空",
      stem: "Android 应用的全局配置文件是 ______，位于 manifests 节点下。",
      answerText: "AndroidManifest.xml",
      accept: ["androidmanifest", "manifest.xml", "AndroidManifest.xml"],
      explain: "manifests 节点显示 AndroidManifest.xml。"
    },
    {
      id: "c2q22",
      type: "填空",
      stem: "MainActivity 的 onCreate 里常用 ______ 加载布局 activity_main。",
      answerText: "setContentView(R.layout.activity_main)",
      accept: ["setcontentview", "R.layout", "setContentView"],
      explain: "课件截图：setContentView(R.layout.activity_main)。"
    }
  ]
};
