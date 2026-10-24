window.CHAPTER_01 = {
  id: "ch01",
  no: "第一章",
  title: "走进 Android",
  examWeight: "考得少，抓概念即可",
  knowledge: [
    {
      title: "这一章到底考什么",
      points: [
        "重点：Android 四层架构、Java/Kotlin 定位、Android 与 iOS / 鸿蒙差异、跨平台基本判断、开发环境与 Git。",
        "不必背：公司成立年份流水账、甜品版本中英对照、各品牌定制 UI 旧名全表。"
      ],
      tip: "闭卷题通常考“能不能判断”，很少考“某年某月发生了什么”。"
    },
    {
      title: "Android 是什么",
      points: [
        "Android 是 Google 主导的智能手机操作系统，开源基础是 AOSP。",
        "国内小米、vivo、OPPO、荣耀等在 AOSP 上深度定制（HyperOS、OriginOS、ColorOS、MagicOS）。",
        "内核和 Android API 大体保留，所以同一份 APK 通常能装到这些机型上。",
        "差异主要在厂商后台杀进程、权限弹窗、安装调试拦截，不是 APK 格式本身。"
      ]
    },
    {
      title: "开发语言",
      points: [
        "工业界新项目优先 Kotlin；Google 已把 Kotlin 作为首选语言。",
        "本课用 Java：你已学过、Studio 仍完整支持，四大组件与生命周期逻辑和 Kotlin 相同。",
        "Kotlin 与 Java 可互相调用；学完后有余力可自学 Kotlin。"
      ]
    },
    {
      title: "Android 与 iOS（记这张表）",
      table: {
        headers: ["对比项", "Android", "iOS"],
        rows: [
          ["开发系统", "Windows / Linux / Mac", "只能 Mac"],
          ["语言", "Java、Kotlin 等", "Objective-C、Swift"],
          ["开发工具", "Android Studio（早期还有 Eclipse）", "Xcode"],
          ["上架账号费用（课件）", "一次性 25 美元", "每年 99 美元"]
        ]
      }
    },
    {
      title: "鸿蒙：兼容版 vs 纯血 NEXT",
      points: [
        "兼容鸿蒙（2/3/4.x）：保留 AOSP 兼容层，可以直接跑 APK。",
        "纯血鸿蒙 NEXT（5.0 起）：去掉安卓代码，不能直接跑 APK，只认 hap。",
        "上架 / 开发纯血鸿蒙：用 DevEco Studio，写 ArkTS，输出 hap，不是 Android Studio。"
      ],
      tip: "考试最爱问：APK 能不能装到 NEXT？答案：不能。"
    },
    {
      title: "跨平台（抓结论）",
      points: [
        "工业界多为混合开发：部分模块跨平台，核心仍原生。",
        "Flutter：一套 Dart 源码，仍要分别编译 apk 和 ipa；apk 不能装 iPhone。",
        "uni-app：一套代码可出安卓 / iOS App 和微信、支付宝、抖音小程序，偏国内生态。",
        "选型：原生团队优先 KMP（只共享业务）；Vue 且要小程序用 uni-app；React 且动画多用 Flutter；金融支付等核心链路保留原生。",
        "误区：跨平台 ≠ 写一遍直接拷到苹果跑；跨平台 ≠ 完全不用管平台差异。"
      ]
    },
    {
      title: "系统架构四层（必会）",
      points: [
        "自上而下：Applications → Application Framework → Libraries / Android Runtime → Linux Kernel。",
        "应用层：Home、Contacts、Phone、Browser 等。",
        "框架层：Activity Manager、Window Manager、Content Providers、View System 等。",
        "Libraries：SQLite、WebKit、OpenGL ES、libc 等；Runtime：Core Libraries、Dalvik（课件图）。",
        "Linux Kernel：驱动与电源管理（Display、Camera、Binder IPC、WiFi、Audio 等）。"
      ],
      tip: "Runtime 和 Libraries 是同一层并列，不要画成五层。"
    },
    {
      title: "应用领域（知道名字即可）",
      points: [
        "课件举了四类：手机、Android Wear、Android TV、Android Auto。",
        "不必展开品牌故事；知道 Android 不只手机即可。"
      ]
    },
    {
      title: "开发环境与 Git",
      points: [
        "软件核心：JDK + Android SDK；当前主推 Android Studio（2015 正式版后逐步取代 Eclipse+ADT）。",
        "Windows 安装前要开启 BIOS 虚拟化（Intel Virtualization Technology）。",
        "Studio 与 SDK 用同级独立文件夹；SDK 文件夹名只能是 sdk，路径勿含特殊字符。",
        "Git：本地版本控制，可不联网；Studio 有图形界面，但 Windows 仍需单独安装 Git。",
        "GitHub / Gitee：远程托管网站，不是 Git 本身。"
      ]
    }
  ],
  quiz: [
    {
      id: "q1",
      type: "单选",
      stem: "国产厂商在 Android 上深度定制时，开源基础通常是？",
      options: ["iOS SDK", "AOSP", "ArkTS", "Xcode"],
      answer: [1],
      explain: "课件明确：国内定制系统基于 AOSP 二次修改，API 大体保留。"
    },
    {
      id: "q2",
      type: "单选",
      stem: "本课程教学使用的 Android 开发语言是？",
      options: ["只学 Kotlin", "Java", "只学 Swift", "只学 Dart"],
      answer: [1],
      explain: "课件说明课程用 Java 降低门槛；Kotlin 建议有余力自学。"
    },
    {
      id: "q3",
      type: "单选",
      stem: "iOS 应用开发通常必须使用？",
      options: ["Windows + Android Studio", "Mac + Xcode", "Linux + Eclipse", "任意系统 + VS Code"],
      answer: [1],
      explain: "课件对比表：iOS 开发系统是 MAC，工具是 Xcode。"
    },
    {
      id: "q4",
      type: "单选",
      stem: "HarmonyOS NEXT（纯血鸿蒙）能否直接安装普通 Android APK？",
      options: ["能", "不能", "只能安装 AAB", "只能安装 IPA"],
      answer: [1],
      explain: "NEXT 移除 AOSP 兼容层，只支持 hap。"
    },
    {
      id: "q5",
      type: "单选",
      stem: "开发纯血鸿蒙原生应用，课件推荐的环境是？",
      options: [
        "Android Studio + Java，输出 apk",
        "DevEco Studio + ArkTS，输出 hap",
        "Xcode + Swift，输出 ipa",
        "Eclipse + ADT，输出 apk"
      ],
      answer: [1],
      explain: "纯血鸿蒙用 DevEco Studio，写 ArkTS，产物 hap。"
    },
    {
      id: "q6",
      type: "单选",
      stem: "Flutter 跨平台时，正确说法是？",
      options: [
        "编一次 apk，苹果安卓都能装",
        "一套 Dart 源码，仍要分别编译 apk 和 ipa",
        "只能做小程序，不能做 App",
        "输出 hap 即可同时覆盖苹果和安卓"
      ],
      answer: [1],
      explain: "源码一套，安装包两套；apk 不能装 iPhone。"
    },
    {
      id: "q7",
      type: "单选",
      stem: "Android 系统架构最底层是？",
      options: ["Applications", "Application Framework", "Libraries", "Linux Kernel"],
      answer: [3],
      explain: "四层自顶向下：应用 → 框架 → 库/运行时 → Linux 内核。"
    },
    {
      id: "q8",
      type: "单选",
      stem: "课件架构图中，Dalvik Virtual Machine 属于？",
      options: ["Linux Kernel", "Android Runtime", "Applications", "仅属于 Libraries"],
      answer: [1],
      explain: "Dalvik 在 Android Runtime 中，与 Libraries 同层并列。"
    },
    {
      id: "q9",
      type: "单选",
      stem: "团队技术栈是前端 Vue，并且要同时做微信等小程序，课件更倾向？",
      options: ["KMP", "uni-app", "只写原生 Android", "只用 React Native"],
      answer: [1],
      explain: "选型原则：Vue + 小程序优先 uni-app。"
    },
    {
      id: "q10",
      type: "单选",
      stem: "金融支付、音视频等对性能稳定性要求极高的核心链路，课件建议？",
      options: ["全部用 Flutter 重写", "全部用 uni-app", "保留原生", "只上纯血鸿蒙"],
      answer: [2],
      explain: "核心链路保留原生，不用跨平台写核心模块。"
    },
    {
      id: "q11",
      type: "多选",
      stem: "课件提到的 Android 应用领域包括哪些？",
      options: ["手机", "Android Wear", "Android TV", "Android Auto", "只用 Windows 桌面"],
      answer: [0, 1, 2, 3],
      explain: "四类：手机、Wear、TV、Auto。"
    },
    {
      id: "q12",
      type: "多选",
      stem: "关于 Git 与 GitHub/Gitee，正确的是？",
      options: [
        "Git 是本地版本控制工具",
        "Git 不联网也能记录本地提交",
        "GitHub/Gitee 是远程代码托管网站",
        "Windows 上有了 Studio 图形界面就不必安装 Git 软件"
      ],
      answer: [0, 1, 2],
      explain: "Windows 仍需独立安装 Git，否则无法真正提交/推送。"
    },
    {
      id: "q13",
      type: "判断",
      stem: "同一份业务逻辑的 APK，通常不必为小米、OPPO、vivo 各编译一份安装包。",
      options: ["对", "错"],
      answer: [0],
      explain: "API 保留，一般一份 APK 可装；要适配的是后台和权限等行为差异。"
    },
    {
      id: "q14",
      type: "判断",
      stem: "跨平台等于写一遍代码后，把 apk 直接拷到 iPhone 就能运行。",
      options: ["对", "错"],
      answer: [1],
      explain: "这是课件明确的误区；苹果要 ipa，不认 apk。"
    },
    {
      id: "q15",
      type: "判断",
      stem: "兼容版鸿蒙（如 HarmonyOS 2/3/4.x）可以安装 Android APK。",
      options: ["对", "错"],
      answer: [0],
      explain: "兼容版保留 AOSP 兼容层，可跑 APK；NEXT 不行。"
    },
    {
      id: "q16",
      type: "判断",
      stem: "Windows 安装 Android 环境前，需要启用 BIOS 中的虚拟化技术。",
      options: ["对", "错"],
      answer: [0],
      explain: "课件要求启用 Intel Virtualization Technology。"
    },
    {
      id: "q17",
      type: "填空",
      stem: "Android 系统架构从上到下四层依次是：应用层、______、Libraries/Android Runtime、______。",
      answerText: "Application Framework（应用框架层）；Linux Kernel（Linux 内核）",
      accept: ["框架", "kernel", "内核", "application framework", "linux"],
      explain: "完整顺序：Applications → Application Framework → Libraries/Runtime → Linux Kernel。"
    },
    {
      id: "q18",
      type: "填空",
      stem: "搭建环境时，软件方面至少需要 ______ 和 Android SDK。",
      answerText: "JDK",
      accept: ["jdk", "JDK"],
      explain: "课件写：软件方面 JDK + Android SDK。"
    }
  ]
};
