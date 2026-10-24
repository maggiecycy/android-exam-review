window.CHAPTER_03 = {
  id: "ch03",
  no: "第三章",
  title: "UI 设计基础",
  examWeight: "布局是重点，尤其 Linear / Frame / Constraint",
  knowledge: [
    {
      title: "知识框架（课件原结构）",
      points: [
        "UI 设计相关概念：View 与 ViewGroup。",
        "控制 UI 界面：XML 控制；XML 与 Java 共同控制。",
        "布局管理器：LinearLayout、RelativeLayout、FrameLayout、TableLayout、GridLayout、ConstraintLayout；可嵌套。",
        "布局对比；gravity / layout_gravity；Margin / Padding。"
      ]
    },
    {
      title: "3.1 View 与 ViewGroup",
      points: [
        "View：所有 UI 组件的基类，位于 android.view 包，代表视图。TextView 是 View 的子类。",
        "ViewGroup：代表容器，继承 View，是抽象类；实际使用它的子类（各种布局管理器）当容器。",
        "所有 UI 界面都由 View、ViewGroup 及其子类组合而成。"
      ]
    },
    {
      title: "3.2 控制 UI 界面",
      points: [
        "方式一：使用 XML 布局文件控制 UI（课件例 3-2-1）。",
        "方式二：XML 和 Java 代码共同控制 UI（课件此节略讲）。",
        "常见流程：XML 声明控件，Java 里 findViewById 后设置监听或改属性。"
      ]
    },
    {
      title: "3.3 布局管理器总览",
      points: [
        "布局管理器用来控制窗体上各组件的位置和大小。",
        "RelativeLayout：相对定位摆放组件。",
        "LinearLayout：在垂直或水平方向依次排放组件。",
        "FrameLayout：默认都摆在容器左上角，后添加的覆盖先添加的。",
        "TableLayout：按表格行列摆放，可跨列。",
        "GridLayout：按网格行列摆放，可跨行、跨列。",
        "ConstraintLayout（课件图中写作 ConstrainLayout）：官方推荐的主流根布局。",
        "布局管理器可以嵌套使用。"
      ]
    },
    {
      title: "3.3.1 线性布局 LinearLayout",
      points: [
        "水平线性布局：每一列只能放一个组件；垂直线性布局：每一行只能放一个组件。",
        "不会自动换行；排到边缘后，剩下的组件可能显示不出来。",
        "常用属性：orientation（horizontal / vertical）、layout_width、layout_height、id、background。",
        "子组件常用：layout_gravity（在父容器中的位置）、layout_weight（占剩余空间比例，默认 0 表示不占剩余空间）。",
        "标记：<LinearLayout>。"
      ]
    },
    {
      title: "3.3.2 相对布局 RelativeLayout",
      points: [
        "通过相对定位控制摆放位置；使用 <RelativeLayout> 标记。",
        "子控件位置通过 RelativeLayout.LayoutParams 一类属性指定：相对父容器或相对其他控件。",
        "课件对比结论：能力有限，复杂界面容易嵌套；新项目已被 ConstraintLayout 取代。"
      ]
    },
    {
      title: "3.3.3 帧布局 FrameLayout",
      points: [
        "每加入一个组件都创建一个空白区域，称为一帧。",
        "默认放在屏幕（容器）左上角；多个组件层叠，后面的覆盖前面的。",
        "常用于游戏等层叠场景（如纸牌）。",
        "常用属性：foreground（前景图像）、foregroundGravity（前景显示位置；课件拼写 foregroundgGravity）。",
        "标记：<FrameLayout>。"
      ]
    },
    {
      title: "3.3.4 表格布局 TableLayout",
      points: [
        "类似表格，按行和列管理组件。",
        "继承 LinearLayout，支持 LinearLayout 的所有属性。",
        "直接往 TableLayout 里加组件时，该组件默认占一行。",
        "可添加多个 <TableRow>；每个 TableRow 占一行，行内每加一个组件就多一列。",
        "列可以隐藏、拉伸、收缩。",
        "属性：collapseColumns（隐藏列号）、shrinkColumns（收缩列号）、stretchColumns（拉伸列号）；多个列号用逗号隔开。"
      ]
    },
    {
      title: "3.3.5 网格布局 GridLayout",
      points: [
        "使用 <GridLayout> 标记。",
        "每个单元格放一个组件；组件可以跨行或跨列。"
      ]
    },
    {
      title: "3.3.6 布局嵌套规则",
      points: [
        "单个布局有时难以实现想要的界面，需要嵌套。",
        "根布局管理器中必须有 xmlns 属性。",
        "一个布局文件最多只能有一个根布局管理器。",
        "若要用多个布局，必须用一个根布局把它们包起来。",
        "不能嵌套太深：结构复杂，还会降低页面加载速度。"
      ],
      tip: "能一层 ConstraintLayout 解决的，就不要套很多层 LinearLayout。"
    },
    {
      title: "3.3.7 约束布局 ConstraintLayout（必会）",
      points: [
        "全名：androidx.constraintlayout.widget.ConstraintLayout。",
        "官方推荐的主流根布局；Android Studio 新建项目默认使用。",
        "核心：给控件设约束，确定相对父容器或其他控件的位置与大小；尽量少嵌套，提升渲染性能。",
        "定位原理：上下左右四边建约束；至少水平 + 垂直各一条，位置才固定。缺少约束会跑到左上角。",
        "优势：扁平化；支持可视化拖拽；有 Chain、Barrier、比例约束、Guideline。",
        "吸收了 RelativeLayout 思想，也能模拟 LinearLayout、GridLayout 效果。",
        "注意：约束不足会错乱；约束冲突会出现意外布局。",
        "新项目优先用它替代 RelativeLayout；简单图层叠加仍可搭配 FrameLayout。"
      ]
    },
    {
      title: "单向约束 vs 双向约束",
      points: [
        "单向约束：同一方向只约束一边（如只约束 Start，不约束 End）。一侧固定，另一侧自由；宽度常由内容决定（wrap_content）。不能有效使用 bias，也不能用 0dp 填满。",
        "双向约束：同一方向同时约束相对两边（如同时约束 Start 与 End）。控件被限制在两点之间；可用 bias（0.5 居中）；可用 0dp（match_constraint）填满约束范围。",
        "bias：左右（或上下）都约束且有剩余空间时，控制偏向哪一侧。",
        "margin：增加控件间距。",
        "链（Chain）：多个控件首尾互相约束；常用 spread，均分空白。",
        "Guideline：看不见的虚拟参考线，只作参照，便于等分、对齐。",
        "Barrier：更高级的虚拟参照物，做动态对齐。"
      ]
    },
    {
      title: "3.3.8 布局对比表（课件）",
      table: {
        headers: ["布局", "核心特点", "适用场景", "当前状况"],
        rows: [
          ["LinearLayout", "水平/垂直依次排列，可用 weight 分剩余空间", "列表项、导航栏、简单表单", "仍用于简单局部；不再当复杂页根布局"],
          ["RelativeLayout", "相对父容器或兄弟控件定位", "旧的复杂页面", "基本淘汰；新项目不用"],
          ["FrameLayout", "默认左上角层叠，后盖前", "叠图、Fragment 容器、弹层、轮播", "一直在用，偏轻量叠层"],
          ["TableLayout", "TableRow 表格方式", "简单静态表", "基本淘汰"],
          ["GridLayout", "网格定位，可跨行跨列", "计算器、宫格、图标菜单", "特定网格场景偶用"],
          ["ConstraintLayout", "约束定位置/间距/比例，扁平单根", "绝大多数页面，新建默认根布局", "官方主流首选"]
        ]
      }
    },
    {
      title: "相对布局 vs 约束布局",
      points: [
        "共同点：都有定位思想，不靠固定坐标定位置。",
        "相对布局：参照物只能是控件或父容器，能力有限，复杂界面容易嵌套。",
        "约束布局：参照物更多，支持双向约束、辅助线、链条；可在单层完成复杂页面，减少嵌套，性能更好，官方主推。"
      ]
    },
    {
      title: "相似属性：gravity / layout_gravity，Margin / Padding",
      points: [
        "课件要求对比 gravity 与 layout_gravity。",
        "gravity：控件内部内容的对齐方式。",
        "layout_gravity：控件自身在父容器中的对齐方式。",
        "课件要求对比 Margin 与 Padding。",
        "Padding：内边距，内容与控件边框之间的空隙。",
        "Margin：外边距，控件与周围控件/父容器之间的空隙。"
      ]
    }
  ],
  quiz: [
    {
      id: "c3q1",
      type: "单选",
      stem: "所有 UI 组件的基类是？",
      options: ["ViewGroup", "View", "Activity", "LinearLayout"],
      answer: [1],
      explain: "View 是所有 UI 组件的基类，位于 android.view 包。"
    },
    {
      id: "c3q2",
      type: "单选",
      stem: "关于 ViewGroup，正确的是？",
      options: [
        "不继承 View",
        "代表容器，继承 View，是抽象类；实际用其子类当布局容器",
        "只能放 TextView",
        "就是 AndroidManifest.xml"
      ],
      answer: [1],
      explain: "ViewGroup 是容器抽象类，布局管理器是它的子类。"
    },
    {
      id: "c3q3",
      type: "单选",
      stem: "LinearLayout 中决定水平还是垂直排列的属性是？",
      options: ["layout_weight", "orientation", "layout_gravity", "background"],
      answer: [1],
      explain: "orientation 控制水平和垂直两种排列方式。"
    },
    {
      id: "c3q4",
      type: "单选",
      stem: "layout_weight 的默认值及含义是？",
      options: [
        "默认 1，平分全部空间",
        "默认 0，不占用剩余空间",
        "默认 -1，隐藏控件",
        "默认 100，占满父容器"
      ],
      answer: [1],
      explain: "课件：默认为 0，不占用剩余空间。"
    },
    {
      id: "c3q5",
      type: "单选",
      stem: "FrameLayout 默认情况下，多个子组件会怎样？",
      options: [
        "水平依次排列",
        "都在左上角层叠，后面的覆盖前面的",
        "自动换行",
        "按表格行列排布"
      ],
      answer: [1],
      explain: "帧布局默认左上角，后添加的覆盖先添加的。"
    },
    {
      id: "c3q6",
      type: "单选",
      stem: "TableLayout 中，用来隐藏某些列的属性是？",
      options: ["stretchColumns", "shrinkColumns", "collapseColumns", "orientation"],
      answer: [2],
      explain: "collapseColumns 设置被隐藏的列号。"
    },
    {
      id: "c3q7",
      type: "单选",
      stem: "Android Studio 新建项目默认、官方推荐的主流根布局是？",
      options: ["RelativeLayout", "TableLayout", "ConstraintLayout", "AbsoluteLayout"],
      answer: [2],
      explain: "ConstraintLayout 是官方推荐主流根布局，新建项目默认使用。"
    },
    {
      id: "c3q8",
      type: "单选",
      stem: "ConstraintLayout 中，控件位置要固定，至少需要？",
      options: [
        "只设宽度",
        "水平方向至少一条约束，垂直方向至少一条约束",
        "四边都必须双向约束",
        "必须使用 Guideline"
      ],
      answer: [1],
      explain: "至少水平 + 垂直各一条约束；缺约束会跑到左上角。"
    },
    {
      id: "c3q9",
      type: "单选",
      stem: "双向约束时，可用什么让控件宽度填满约束范围？",
      options: ["wrap_content", "0dp（match_constraint）", "layout_weight=0", "foreground"],
      answer: [1],
      explain: "双向约束下可用 0dp（match_constraint）填充范围。"
    },
    {
      id: "c3q10",
      type: "单选",
      stem: "bias=0.5 通常表示？",
      options: ["隐藏控件", "居中", "靠左", "靠右"],
      answer: [1],
      explain: "两边都约束且有剩余空间时，0.5 表示居中。"
    },
    {
      id: "c3q11",
      type: "单选",
      stem: "一个布局 XML 文件中，根布局管理器的数量最多是？",
      options: ["没有限制", "1 个", "2 个", "与控件数量相同"],
      answer: [1],
      explain: "一个布局文件最多只能有一个根布局管理器。"
    },
    {
      id: "c3q12",
      type: "单选",
      stem: "gravity 与 layout_gravity 的区别是？",
      options: [
        "没有区别",
        "gravity 管控件内部内容对齐；layout_gravity 管控件在父容器中的位置",
        "gravity 只能用于 ConstraintLayout",
        "layout_gravity 只能设置颜色"
      ],
      answer: [1],
      explain: "课件要求对比二者：一个对内，一个对外（相对父容器）。"
    },
    {
      id: "c3q13",
      type: "单选",
      stem: "Padding 与 Margin 的区别是？",
      options: [
        "Padding 是外边距，Margin 是内边距",
        "Padding 是内边距，Margin 是外边距",
        "二者完全相同",
        "只有 LinearLayout 能用 Margin"
      ],
      answer: [1],
      explain: "Padding 内边距；Margin 外边距。"
    },
    {
      id: "c3q14",
      type: "多选",
      stem: "关于布局嵌套，课件正确说法有？",
      options: [
        "根布局必须有 xmlns 属性",
        "一个布局文件最多一个根布局",
        "多个布局要用一个根布局包起来",
        "嵌套越深越好，加载更快"
      ],
      answer: [0, 1, 2],
      explain: "嵌套太深会变复杂并降低加载速度。"
    },
    {
      id: "c3q15",
      type: "多选",
      stem: "ConstraintLayout 的优势包括？",
      options: [
        "扁平化，减少多层嵌套",
        "支持可视化拖拽",
        "内置 Chain、Barrier、Guideline 等",
        "完全不能模拟线性排列"
      ],
      answer: [0, 1, 2],
      explain: "它还能模拟 LinearLayout、GridLayout 的排布效果。"
    },
    {
      id: "c3q16",
      type: "多选",
      stem: "按课件对比表，当前仍较常用的有？",
      options: [
        "ConstraintLayout 作为主流根布局",
        "FrameLayout 做轻量叠层",
        "RelativeLayout 作为新项目首选根布局",
        "LinearLayout 做简单局部布局"
      ],
      answer: [0, 1, 3],
      explain: "RelativeLayout 基本淘汰；新项目不用它当根布局。"
    },
    {
      id: "c3q17",
      type: "判断",
      stem: "水平 LinearLayout 中，每一列只能放一个组件。",
      options: ["对", "错"],
      answer: [0],
      explain: "课件原话：水平线性布局每一列只能放一个；垂直则每一行只能放一个。"
    },
    {
      id: "c3q18",
      type: "判断",
      stem: "LinearLayout 会自动换行显示放不下的组件。",
      options: ["对", "错"],
      answer: [1],
      explain: "不会换行；排到边缘后剩下的可能不显示。"
    },
    {
      id: "c3q19",
      type: "判断",
      stem: "单向约束时可以方便地使用 bias 和 0dp 填满宽度。",
      options: ["对", "错"],
      answer: [1],
      explain: "单向约束无法有效使用 bias，也不能用 0dp 定义填充范围；需要双向约束。"
    },
    {
      id: "c3q20",
      type: "判断",
      stem: "简单图层叠加场景，仍可搭配 FrameLayout。",
      options: ["对", "错"],
      answer: [0],
      explain: "课件：新项目优先 ConstraintLayout；简单叠层仍可搭配 FrameLayout。"
    },
    {
      id: "c3q21",
      type: "填空",
      stem: "所有 UI 界面都由 ______ 和 ______ 及其子类组合而成。",
      answerText: "View；ViewGroup",
      accept: ["view", "viewgroup", "View", "ViewGroup"],
      explain: "课件 3.1：由 View 与 ViewGroup 及其子类组成。"
    },
    {
      id: "c3q22",
      type: "填空",
      stem: "ConstraintLayout 中看不见、只作参照的虚拟参考线叫 ______。",
      answerText: "Guideline（辅助线）",
      accept: ["guideline", "辅助线", "Guideline"],
      explain: "Guideline 用于等分、统一对齐。"
    }
  ]
};
