window.AndroidLab = (function () {
  /** 与必备知识点 1–40 对齐 */
  const KP = {
    architecture: { n: 1, tag: "架构", title: "系统四层架构", text: "应用层 → 框架层 → Libraries/Runtime → Kernel。" },
    project: { n: 2, tag: "工程", title: "Project / Module", text: "Project 工作空间；Module 可运行模块（常为 app）。" },
    nodes: { n: 3, tag: "工程", title: "manifests / java / res", text: "配置、源码、资源三个常用节点。" },
    manifest: { n: 4, tag: "配置", title: "AndroidManifest", text: "全局配置；每个 Activity 必须 <activity> 注册。" },
    res: { n: 5, tag: "资源", title: "res 四目录", text: "drawable / layout / mipmap / values。" },
    rjava: { n: 6, tag: "资源", title: "R.java", text: "资源索引；R.layout / R.id；自动更新。" },
    setContent: { n: 7, tag: "Activity", title: "setContentView", text: "onCreate 加载布局，须在 findViewById 之前。" },
    view: { n: 8, tag: "UI", title: "View / ViewGroup", text: "View 基类；ViewGroup 容器（抽象）。" },
    layouts: { n: 9, tag: "布局", title: "六种布局", text: "Linear / Relative / Frame / Table / Grid / Constraint。" },
    linear: { n: 10, tag: "布局", title: "LinearLayout", text: "orientation；layout_weight 默认 0。" },
    relative: { n: 11, tag: "布局", title: "RelativeLayout", text: "相对父/兄弟定位；新项目多被 Constraint 取代。" },
    frame: { n: 12, tag: "布局", title: "FrameLayout", text: "左上层叠；叠图、Fragment 容器。" },
    table: { n: 13, tag: "布局", title: "TableLayout", text: "表格 + TableRow；列可隐藏/拉伸/收缩。" },
    grid: { n: 14, tag: "布局", title: "GridLayout", text: "网格；可跨行跨列。" },
    constraint: { n: 15, tag: "布局", title: "ConstraintLayout", text: "约束定位；默认根布局，减嵌套。" },
    bias: { n: 16, tag: "布局", title: "单向 / 双向约束", text: "双向才好用 bias、0dp 填满。" },
    guideline: { n: 17, tag: "布局", title: "bias / 0dp / Guideline", text: "bias 偏向；0dp 填满；Guideline 虚拟线。" },
    gravity: { n: 18, tag: "布局", title: "gravity / layout_gravity", text: "内容对齐 vs 控件在父中位置。" },
    padding: { n: 19, tag: "布局", title: "Padding / Margin", text: "内边距 vs 外边距。" },
    nest: { n: 20, tag: "布局", title: "布局嵌套规则", text: "xmlns；一个根；勿嵌套太深。" },
    text: { n: 21, tag: "控件", title: "TextView / EditText", text: "显示 vs 可编辑；EditText 继承 TextView。" },
    button: { n: 22, tag: "控件", title: "Button + 监听器", text: "必须设监听器才有业务响应。" },
    image: { n: 23, tag: "控件", title: "ImageView / ImageButton", text: "src / scaleType；按钮侧重点击。" },
    radio: { n: 24, tag: "控件", title: "Radio / CheckBox", text: "单选互斥 vs 多选；isChecked()。" },
    progress: { n: 25, tag: "控件", title: "进度条类", text: "ProgressBar / SeekBar / RatingBar。" },
    adapter: { n: 26, tag: "Adapter", title: "Adapter 桥梁", text: "Array / Simple / BaseAdapter。" },
    arrayAdapter: { n: 27, tag: "Adapter", title: "ArrayAdapter", text: "简单一行文本；Spinner 常用。" },
    simpleAdapter: { n: 28, tag: "Adapter", title: "SimpleAdapter", text: "List<Map>；key 必须对应。" },
    baseAdapter: { n: 29, tag: "Adapter", title: "BaseAdapter 四方法", text: "getCount / getItem / getItemId / getView。" },
    gridview: { n: 30, tag: "控件", title: "GridView", text: "网格列表；常配 BaseAdapter。" },
    spinner: { n: 31, tag: "控件", title: "Spinner 两种方式", text: "entries 或 ArrayAdapter+setAdapter。" },
    listview: { n: 32, tag: "控件", title: "ListView", text: "垂直列表；OnItemClickListener。" },
    toast: { n: 33, tag: "提示", title: "Toast / Log", text: "makeText().show()；Log.i 调试。" },
    activity: { n: 34, tag: "组件", title: "Activity / 四大组件", text: "一屏界面；Intent 不是四大组件。" },
    callback: { n: 35, tag: "生命周期", title: "回调", text: "系统自动调用，勿手动 onCreate()。" },
    lifecycle: { n: 36, tag: "生命周期", title: "七方法总览", text: "Create→Start→Resume→Pause→Stop→Restart→Destroy。" },
    visible: { n: 37, tag: "生命周期", title: "可见 / 可交互", text: "Create 不可见；Start 可见；Resume 可交互。" },
    pause: { n: 38, tag: "生命周期", title: "Pause / Stop / Restart / Destroy", text: "勿耗时；释资源；Restart 首次不执行。" },
    intent: { n: 39, tag: "跳转", title: "Intent / Bundle", text: "信使 + 键值包；finish() 关闭。" },
    fragment: { n: 40, tag: "组件", title: "Fragment", text: "宿主 Activity；onCreateView；静/动态添加。" }
  };

  const ALL_KP_IDS = Object.keys(KP);

  /** 列表项：每项独立详情，知识点互不相同 */
  const LIST_TOPICS = [
    {
      id: "life",
      title: "Activity 生命周期",
      summary: "七回调 · 可见/可交互",
      keys: ["activity", "callback", "lifecycle", "visible", "pause"],
      life: ["本页 onResume", "对照：Create 不可见 → Start 可见 → Resume 可交互"],
      body: `
        <p class="lab-label">本项专讲生命周期（不是 Fragment）</p>
        <div class="lab-card lab-steps">
          <div><code>onCreate</code><span>初始化，界面还不可见</span></div>
          <div><code>onStart</code><span>可见，尚不可交互</span></div>
          <div><code>onResume</code><span>获焦点，可点击</span></div>
          <div><code>onPause</code><span>将失焦点，勿耗时</span></div>
          <div><code>onStop</code><span>完全不可见，释资源</span></div>
          <div><code>onRestart</code><span>从后台回前台前（首次不执行）</span></div>
          <div><code>onDestroy</code><span>销毁清理</span></div>
        </div>`,
      code: `// MainActivity.java —— 生命周期回调（系统调用，勿手动调）
@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main); // 此时界面还不可见
    Log.i("Life", "onCreate");
}
@Override protected void onStart()  { super.onStart();  Log.i("Life","onStart"); }
@Override protected void onResume() { super.onResume(); Log.i("Life","onResume"); }
@Override protected void onPause()  { super.onPause();  /* 可存临时数据，勿耗时 */ }
@Override protected void onStop()   { super.onStop();   /* 释放较占资源 */ }
@Override protected void onRestart(){ super.onRestart(); /* 首次启动不走这里 */ }
@Override protected void onDestroy(){ super.onDestroy(); }`
    },
    {
      id: "intent",
      title: "Intent / Bundle 传值",
      summary: "信使 · 键值对 · finish",
      keys: ["intent", "activity", "manifest", "setContent"],
      life: ["A: onPause→onStop", "B: onCreate→onStart→onResume"],
      body: `
        <p class="lab-label">本项专讲传值（无 Fragment）</p>
        <div class="lab-card">
          <strong>模拟收到的 Bundle</strong>
          <p>name = "曹艳"　score = 95</p>
        </div>
        <p class="lab-hint">Intent 是信使，不是四大组件；键名发送/接收必须一致。</p>
        <button type="button" class="lab-btn lab-btn-ghost" data-action="finish">finish() 关闭本页</button>`,
      code: `// 发送方 A
Intent intent = new Intent(A.this, B.class);
Bundle bundle = new Bundle();
bundle.putString("name", "曹艳");
bundle.putInt("score", 95);
intent.putExtras(bundle);
startActivity(intent);

// 接收方 B
Bundle b = getIntent().getExtras();
String name = b.getString("name");
int score = b.getInt("score");
// 关闭：finish();`
    },
    {
      id: "base",
      title: "BaseAdapter 四方法",
      summary: "getCount / getView …",
      keys: ["adapter", "baseAdapter", "listview"],
      life: ["ListActivity onResume", "每次滚到新行调用 getView"],
      body: `
        <p class="lab-label">本项专讲 BaseAdapter（不是 Fragment）</p>
        <div class="lab-card lab-steps">
          <div><code>getCount()</code><span>数据个数</span></div>
          <div><code>getItem(pos)</code><span>取数据项</span></div>
          <div><code>getItemId(pos)</code><span>行 ID</span></div>
          <div><code>getView(...)</code><span>生成/复用每一行（convertView）</span></div>
        </div>`,
      code: `public class MyAdapter extends BaseAdapter {
    private List<String> data;
    private LayoutInflater inflater;
    @Override public int getCount() { return data.size(); }
    @Override public Object getItem(int i) { return data.get(i); }
    @Override public long getItemId(int i) { return i; }
    @Override
    public View getView(int i, View convertView, ViewGroup parent) {
        if (convertView == null) {
            convertView = inflater.inflate(R.layout.item_row, parent, false);
        }
        TextView tv = convertView.findViewById(R.id.tv_title);
        tv.setText(data.get(i));
        return convertView;
    }
}`
    },
    {
      id: "simple",
      title: "SimpleAdapter + Map",
      summary: "List<Map> · key 对应",
      keys: ["adapter", "simpleAdapter", "listview"],
      life: ["onResume", "SimpleAdapter 绑定文字+图片字段"],
      body: `
        <p class="lab-label">本项专讲 SimpleAdapter（与 BaseAdapter 不同）</p>
        <div class="lab-card">
          <p>数据源：<code>List&lt;Map&lt;String, Object&gt;&gt;</code></p>
          <p>String[] from 的 key <strong>必须</strong> 与 Map 的 key 一致。</p>
        </div>`,
      code: `List<Map<String, Object>> list = new ArrayList<>();
Map<String, Object> map = new HashMap<>();
map.put("title", "高等数学");
map.put("img", R.drawable.ic_book);
list.add(map);

SimpleAdapter adapter = new SimpleAdapter(
    this, list, R.layout.item_book,
    new String[]{"title", "img"},          // from：Map 的 key
    new int[]{R.id.tv_title, R.id.iv_icon} // to：控件 id
);
listView.setAdapter(adapter);`
    },
    {
      id: "grid",
      title: "GridView 网格列表",
      summary: "二维网格 · BaseAdapter",
      keys: ["gridview", "baseAdapter", "adapter"],
      life: ["GridActivity onResume"],
      body: `
        <p class="lab-label">本项专讲 GridView（形态是网格，不是单列 ListView）</p>
        <div class="lab-grid-demo">
          <span>1</span><span>2</span><span>3</span>
          <span>4</span><span>5</span><span>6</span>
        </div>
        <p class="lab-hint">常配合 BaseAdapter 定制每一格。</p>`,
      code: `GridView gridView = findViewById(R.id.grid);
gridView.setNumColumns(3);
gridView.setAdapter(new MyAdapter(data)); // 常用 BaseAdapter

gridView.setOnItemClickListener((parent, view, position, id) -> {
    Toast.makeText(this, "点了第" + position + "格", Toast.LENGTH_SHORT).show();
});`
    },
    {
      id: "frag",
      title: "Fragment 碎片",
      summary: "宿主 · onCreateView",
      keys: ["fragment", "frame", "activity", "callback"],
      life: ["DetailActivity 仍 onResume", "切换碎片只重建 Fragment 视图"],
      body: `
        <p class="lab-label">仅本项演示 Fragment（其它列表项都不是 Fragment）</p>
        <div class="lab-frag-tabs">
          <button type="button" class="lab-frag-tab is-on" data-frag="A">简介 Fragment</button>
          <button type="button" class="lab-frag-tab" data-frag="B">笔记 Fragment</button>
        </div>
        <div class="lab-frag-box" data-frag-box>
          <p>Fragment A：重写 onCreateView → inflate 布局返回 View。宿主是 Activity。</p>
        </div>`,
      code: `// MyFragment.java
public class MyFragment extends Fragment {
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        return inflater.inflate(R.layout.fragment_a, container, false);
    }
}

// Activity 布局中静态添加
// <fragment android:name="com.demo.MyFragment" ... />
// 或运行时：getSupportFragmentManager().beginTransaction()
//     .replace(R.id.frame_container, new MyFragment()).commit();`
    },
    {
      id: "constraint",
      title: "Constraint 约束",
      summary: "单向/双向 · bias · 0dp",
      keys: ["constraint", "bias", "guideline", "nest"],
      life: ["Layout 演示页 onResume"],
      body: `
        <p class="lab-label">本项专讲约束（官方默认根布局）</p>
        <div class="lab-card lab-steps">
          <div><code>单向</code><span>只约束一边；不便用 bias/0dp</span></div>
          <div><code>双向</code><span>两端都约束；可用 bias、0dp 填满</span></div>
          <div><code>bias=0.5</code><span>居中；Guideline 为虚拟参考线</span></div>
        </div>`,
      code: `<!-- 双向约束 + 0dp 填满 + bias 居中 -->
<Button
    android:layout_width="0dp"
    android:layout_height="wrap_content"
    app:layout_constraintStart_toStartOf="parent"
    app:layout_constraintEnd_toEndOf="parent"
    app:layout_constraintTop_toTopOf="parent"
    app:layout_constraintHorizontal_bias="0.5" />
<!-- Guideline：不可见，只作参照 -->`
    }
  ];

  const LAYOUT_TABS = [
    {
      id: "linear",
      name: "Linear",
      keys: ["layouts", "linear", "gravity", "padding", "view"],
      tip: "水平/垂直依次排；weight 分剩余空间。",
      demo: `<div class="lab-demo-linear"><span style="flex:1">weight1</span><span style="flex:2">weight2</span></div>`,
      code: `<LinearLayout
    android:orientation="horizontal"
    android:layout_width="match_parent"
    android:layout_height="wrap_content">
    <Button android:layout_width="0dp"
            android:layout_height="wrap_content"
            android:layout_weight="1" />
    <Button android:layout_width="0dp"
            android:layout_height="wrap_content"
            android:layout_weight="2" />
</LinearLayout>`
    },
    {
      id: "relative",
      name: "Relative",
      keys: ["layouts", "relative", "gravity"],
      tip: "相对父容器或兄弟控件定位。",
      demo: `<div class="lab-demo-relative"><span class="a">相对父顶</span><span class="b">在 A 下方</span></div>`,
      code: `<RelativeLayout ...>
  <TextView android:id="@+id/tv_a"
      android:layout_alignParentTop="true" ... />
  <TextView
      android:layout_below="@id/tv_a"
      android:layout_alignParentStart="true" ... />
</RelativeLayout>`
    },
    {
      id: "frame",
      name: "Frame",
      keys: ["layouts", "frame"],
      tip: "默认左上层叠，后添加的盖住先添加的。",
      demo: `<div class="lab-demo-frame"><i></i><i></i></div>`,
      code: `<FrameLayout ...>
  <ImageView android:src="@drawable/bg" ... />
  <TextView android:text="叠在上面" ... />
</FrameLayout>`
    },
    {
      id: "table",
      name: "Table",
      keys: ["layouts", "table"],
      tip: "TableRow 成行；列可隐藏/拉伸/收缩。",
      demo: `<div class="lab-demo-table"><b></b><b></b><b></b><b></b></div>`,
      code: `<TableLayout
    android:stretchColumns="1"
    android:shrinkColumns="0" ...>
  <TableRow>
    <TextView android:text="姓名" />
    <EditText ... />
  </TableRow>
</TableLayout>`
    },
    {
      id: "gridL",
      name: "GridL",
      keys: ["layouts", "grid"],
      tip: "GridLayout 网格，可跨行跨列。",
      demo: `<div class="lab-demo-gridl"><span></span><span class="span2"></span><span></span><span></span></div>`,
      code: `<GridLayout
    android:columnCount="2"
    android:rowCount="2" ...>
  <Button android:layout_columnSpan="2" ... />
  <Button ... /><Button ... />
</GridLayout>`
    },
    {
      id: "cons",
      name: "Constraint",
      keys: ["layouts", "constraint", "bias", "guideline", "nest"],
      tip: "官方默认根布局；双向约束 + bias / 0dp。",
      demo: `<div class="lab-demo-cons"><span>0dp+bias</span></div>`,
      code: `<!-- 见列表「Constraint 约束」项中的完整示例 -->
app:layout_constraintStart_toStartOf="parent"
app:layout_constraintEnd_toEndOf="parent"
android:layout_width="0dp"
app:layout_constraintHorizontal_bias="0.5"`
    }
  ];

  const SCENE_CODE = {
    boot: `// AndroidManifest.xml 必须注册
<activity android:name=".HomeActivity">
  <intent-filter>
    <action android:name="android.intent.action.MAIN"/>
    <category android:name="android.intent.category.LAUNCHER"/>
  </intent-filter>
</activity>

// HomeActivity.java
@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_home); // R.layout ← res/layout
}`,
    homeIdle: `<!-- activity_home.xml：ConstraintLayout 根 + Linear 分区 -->
<androidx.constraintlayout.widget.ConstraintLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:padding="16dp">
  <LinearLayout
      android:orientation="vertical"
      android:layout_width="0dp"
      app:layout_constraintStart_toStartOf="parent"
      app:layout_constraintEnd_toEndOf="parent" ... >
    <TextView android:text="校园口袋本" ... />
    <Button android:id="@+id/btn_form" android:text="打开表单" ... />
  </LinearLayout>
</androidx.constraintlayout.widget.ConstraintLayout>`,
    openForm: `Intent intent = new Intent(HomeActivity.this, FormActivity.class);
startActivity(intent);
// 系统：Home onPause→onStop；Form onCreate→onStart→onResume`,
    formWidgets: `EditText et = findViewById(R.id.et_name);
RadioGroup rg = findViewById(R.id.rg_grade);
CheckBox cb = findViewById(R.id.cb_java);
SeekBar seek = findViewById(R.id.seek);
// Spinner 动态：
ArrayAdapter<String> ad = new ArrayAdapter<>(
    this, android.R.layout.simple_spinner_item, names);
spinner.setAdapter(ad);
// 或布局：android:entries="@array/course_array"`,
    clickButton: `btn.setOnClickListener(v -> {
    Toast.makeText(this, "已提交", Toast.LENGTH_SHORT).show();
    Log.i("Form", "submit clicked");
});
// 也可布局：android:onClick="onSubmit"`,
    openList: `ListView lv = findViewById(R.id.lv);
lv.setAdapter(new MyAdapter(data)); // BaseAdapter
lv.setOnItemClickListener((p, v, pos, id) -> {
    Intent i = new Intent(this, TopicActivity.class);
    i.putExtra("topicId", data.get(pos).id);
    startActivity(i);
});`,
    project: `// Project = 工作空间；Module = app
// Android 视图：
//   manifests/AndroidManifest.xml
//   java/com.xxx.MainActivity.java
//   res/drawable | layout | mipmap | values
// 代码引用：R.layout.activity_main、R.id.btn_ok`,
    backHome: `// 当前页
finish();
// 若 Home 在后台：onRestart → onStart → onResume
// 当前页：onPause → onStop → onDestroy`
  };

  let root = null;
  let screen = "home";
  let layoutTab = "linear";
  let topicId = null;
  let showCode = false;
  let hit = new Set();
  let toastTimer = null;
  let codeOverride = null;

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function showToast(msg) {
    const el = root.querySelector(".lab-toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("is-show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("is-show"), 1800);
  }

  function markHit(keys) {
    (keys || []).forEach((k) => hit.add(k));
    const bar = root.querySelector(".lab-cover-bar");
    const label = root.querySelector(".lab-cover-label");
    if (!bar || !label) return;
    const pct = Math.round((hit.size / ALL_KP_IDS.length) * 100);
    bar.style.width = pct + "%";
    label.textContent = `已点亮 ${hit.size} / ${ALL_KP_IDS.length} 个常考概念`;
    root.querySelectorAll(".lab-cover-dot").forEach((d) => {
      d.classList.toggle("is-on", hit.has(d.dataset.kid));
    });
  }

  function setSpotlight(title, action, life, keys, code) {
    markHit(keys);
    codeOverride = code || null;

    root.querySelector(".lab-spotlight").innerHTML = `
      <p class="lab-scene-kicker">当前动作</p>
      <h3>${escapeHtml(title)}</h3>
      <p class="lab-scene-action">${escapeHtml(action)}</p>
    `;

    root.querySelector(".lab-life").innerHTML = (life || [])
      .map((s) => `<li><code>${escapeHtml(s)}</code></li>`)
      .join("");

    root.querySelector(".lab-chips").innerHTML = (keys || [])
      .map((k) => {
        const item = KP[k];
        if (!item) return "";
        return `
          <article class="lab-chip is-hot">
            <span class="lab-chip-tag">#${item.n} · ${escapeHtml(item.tag)}</span>
            <strong>${escapeHtml(item.title)}</strong>
            <p>${escapeHtml(item.text)}</p>
          </article>`;
      })
      .join("");

    const log = root.querySelector(".lab-log");
    if (log) {
      const time = new Date().toLocaleTimeString();
      log.insertAdjacentHTML(
        "afterbegin",
        `<li><span>${escapeHtml(time)}</span>${escapeHtml(title)}</li>`
      );
    }

    renderCodePanel(code);
  }

  function renderCodePanel(code) {
    const panel = root.querySelector(".lab-code-panel");
    const pre = root.querySelector(".lab-code-pre");
    if (!panel || !pre) return;
    panel.hidden = !showCode;
    pre.textContent = code || "// 当前动作暂无示例代码，切换页面或点列表项查看。";
  }

  function currentTopic() {
    return LIST_TOPICS.find((t) => t.id === topicId);
  }

  function syncNav() {
    root.querySelectorAll(".lab-nav-btn").forEach((b) => {
      const id = b.dataset.nav;
      const on =
        id === screen ||
        (screen === "topic" && id === "list") ||
        (screen === "layouts" && id === "home");
      b.classList.toggle("is-on", on);
    });
  }

  function renderScreen() {
    const body = root.querySelector(".lab-screen-body");
    const title = root.querySelector(".lab-app-title");
    const back = root.querySelector(".lab-back");
    back.hidden = screen === "home";
    syncNav();

    if (screen === "home") {
      title.textContent = "HomeActivity";
      body.innerHTML = `
        <div class="lab-page">
          <div class="lab-hero">
            <div class="lab-avatar">安</div>
            <div>
              <p class="lab-label">TextView + Image 区</p>
              <h4>校园口袋本</h4>
              <p class="lab-sub">Constraint 根 · Linear 分区</p>
            </div>
          </div>
          <button type="button" class="lab-btn" data-go="form">① 表单页 FormActivity</button>
          <button type="button" class="lab-btn" data-go="list">② 知识点列表 ListActivity</button>
          <button type="button" class="lab-btn lab-btn-ghost" data-go="layouts">③ 六种布局实验室</button>
          <button type="button" class="lab-btn lab-btn-ghost" data-action="project">④ 工程结构 Project/Module</button>
          <p class="lab-hint">右侧可勾选「显示相关代码」对照考试写法。</p>
        </div>`;
      if (!root.dataset.booted) {
        root.dataset.booted = "1";
        setSpotlight(
          "启动 HomeActivity",
          "Manifest 注册 → setContentView → 进入 onResume",
          ["onCreate", "onStart", "onResume"],
          ["architecture", "manifest", "activity", "setContent", "rjava", "res", "nodes", "view", "constraint", "nest", "callback", "lifecycle", "visible"],
          SCENE_CODE.boot
        );
      } else {
        setSpotlight(
          "HomeActivity 运行中",
          "前台可交互；可去表单 / 列表 / 布局实验室",
          ["onResume"],
          ["activity", "constraint", "linear", "text", "button", "image", "gravity", "padding", "project"],
          SCENE_CODE.homeIdle
        );
      }
      return;
    }

    if (screen === "form") {
      title.textContent = "FormActivity";
      body.innerHTML = `
        <div class="lab-page lab-form">
          <p class="lab-label">EditText</p>
          <input class="lab-input" type="text" placeholder="姓名" value="曹艳" />
          <p class="lab-label">RadioGroup 单选</p>
          <div class="lab-row">
            <label><input type="radio" name="g" /> 大一</label>
            <label><input type="radio" name="g" checked /> 大二</label>
            <label><input type="radio" name="g" /> 大三</label>
          </div>
          <p class="lab-label">CheckBox 多选</p>
          <div class="lab-row">
            <label><input type="checkbox" checked /> Java</label>
            <label><input type="checkbox" checked /> Android</label>
            <label><input type="checkbox" /> 网络</label>
          </div>
          <p class="lab-label">Spinner + ArrayAdapter</p>
          <select class="lab-select" data-role="spinner">
            <option>移动开发</option>
            <option>计算机网络</option>
            <option>数据结构</option>
          </select>
          <p class="lab-label">SeekBar · Rating 步进同类</p>
          <input class="lab-seek" type="range" min="0" max="100" value="70" />
          <div class="lab-rating" aria-label="RatingBar">★★★★☆ <small>stepSize 示意</small></div>
          <button type="button" class="lab-btn" data-action="submit">提交 Button → Toast</button>
        </div>`;
      setSpotlight(
        "FormActivity · 常用控件",
        "EditText / Radio / CheckBox / Spinner / SeekBar / RatingBar",
        ["Form: onCreate→onStart→onResume"],
        ["intent", "text", "radio", "spinner", "arrayAdapter", "progress", "linear", "view", "setContent"],
        SCENE_CODE.formWidgets
      );
      return;
    }

    if (screen === "list") {
      title.textContent = "ListActivity";
      body.innerHTML = `
        <div class="lab-page">
          <p class="lab-label">ListView：点不同项 → 不同知识点（不再共用 Fragment 页）</p>
          <ul class="lab-listview">
            ${LIST_TOPICS.map(
              (t, i) => `
              <li data-topic="${t.id}">
                <span class="lab-idx">${i + 1}</span>
                <span>
                  <strong>${escapeHtml(t.title)}</strong>
                  <small class="lab-item-sub">${escapeHtml(t.summary)}</small>
                </span>
              </li>`
            ).join("")}
          </ul>
        </div>`;
      setSpotlight(
        "ListActivity",
        "BaseAdapter 绑定；每项进入专属详情，知识点不同",
        ["List: onCreate→onStart→onResume"],
        ["intent", "listview", "adapter", "baseAdapter", "lifecycle", "pause"],
        SCENE_CODE.openList
      );
      return;
    }

    if (screen === "layouts") {
      title.textContent = "LayoutLabActivity";
      const tab = LAYOUT_TABS.find((t) => t.id === layoutTab) || LAYOUT_TABS[0];
      body.innerHTML = `
        <div class="lab-page">
          <p class="lab-label">六种布局实验室 · 点 Tab 切换知识点</p>
          <div class="lab-layout-tabs">
            ${LAYOUT_TABS.map(
              (t) =>
                `<button type="button" class="lab-frag-tab${t.id === layoutTab ? " is-on" : ""}" data-layout="${t.id}">${t.name}</button>`
            ).join("")}
          </div>
          <div class="lab-layout-stage">${tab.demo}</div>
          <p class="lab-hint">${escapeHtml(tab.tip)}</p>
        </div>`;
      setSpotlight(
        `布局：${tab.name}`,
        tab.tip,
        ["LayoutLab onResume"],
        tab.keys,
        tab.code
      );
      return;
    }

    if (screen === "topic") {
      const t = currentTopic();
      if (!t) {
        go("list");
        return;
      }
      title.textContent = "TopicActivity";
      body.innerHTML = `
        <div class="lab-page">
          <div class="lab-card">
            <strong>Intent 传入 topicId</strong>
            <p>${escapeHtml(t.id)} · ${escapeHtml(t.title)}</p>
          </div>
          ${t.body}
          ${
            t.id !== "intent"
              ? `<button type="button" class="lab-btn lab-btn-ghost" data-action="finish">finish() 返回列表</button>`
              : ""
          }
        </div>`;
      // rebind frag tabs active state after HTML inject
      if (t.id === "frag") {
        const box = body.querySelector("[data-frag-box]");
        body.querySelectorAll("[data-frag]").forEach((btn) => {
          btn.classList.toggle("is-on", btn.dataset.frag === "A");
        });
        if (box) {
          box.innerHTML =
            "<p>Fragment A：重写 onCreateView → inflate 布局返回 View。宿主是 Activity。</p>";
        }
      }
      setSpotlight(
        t.title,
        t.summary.replace(/&lt;/g, "<").replace(/&gt;/g, ">"),
        t.life,
        t.keys,
        t.code
      );
    }
  }

  function go(next) {
    const prev = screen;
    screen = next;
    if (next === "form" && prev !== "form") {
      renderScreen();
      setSpotlight(
        "进入 FormActivity",
        "Intent 跳转；上一页 onPause→onStop",
        ["Home: onPause → onStop", "Form: onCreate → onStart → onResume"],
        ["intent", "manifest", "activity", "callback", "lifecycle", "pause", "visible", "setContent"],
        SCENE_CODE.openForm
      );
      setTimeout(() => {
        if (screen === "form") {
          setSpotlight(
            "FormActivity · 常用控件",
            "EditText / Radio / CheckBox / Spinner / SeekBar",
            ["onResume"],
            ["text", "radio", "spinner", "arrayAdapter", "progress", "linear", "view", "button"],
            SCENE_CODE.formWidgets
          );
        }
      }, 700);
      return;
    }
    if (next === "home" && prev !== "home" && prev !== "layouts") {
      renderScreen();
      setSpotlight(
        "finish() 返回",
        "当前销毁；后台页可能 onRestart",
        ["当前: onPause→onStop→onDestroy", "Home: onRestart→onStart→onResume"],
        ["intent", "pause", "lifecycle", "callback", "activity"],
        SCENE_CODE.backHome
      );
      setTimeout(() => {
        if (screen === "home") {
          setSpotlight(
            "HomeActivity 运行中",
            "已回到前台可交互",
            ["onResume"],
            ["activity", "constraint", "visible"],
            SCENE_CODE.homeIdle
          );
        }
      }, 800);
      return;
    }
    renderScreen();
  }

  function openTopic(id) {
    topicId = id;
    screen = "topic";
    renderScreen();
  }

  function bind() {
    root.addEventListener("click", (e) => {
      const goBtn = e.target.closest("[data-go]");
      if (goBtn) {
        go(goBtn.dataset.go);
        return;
      }
      if (e.target.closest(".lab-back")) {
        if (screen === "topic") go("list");
        else go("home");
        return;
      }
      const nav = e.target.closest("[data-nav]");
      if (nav) {
        topicId = null;
        go(nav.dataset.nav);
        return;
      }
      if (e.target.closest('[data-action="submit"]')) {
        const name = (root.querySelector(".lab-input") || {}).value || "";
        showToast(`Toast：已提交 ${name || "（空）"}`);
        setSpotlight(
          "点击 Button",
          "OnClickListener → Toast.makeText().show()",
          ["仍在 onResume"],
          ["button", "toast", "callback"],
          SCENE_CODE.clickButton
        );
        return;
      }
      if (e.target.closest('[data-action="finish"]')) {
        if (screen === "topic") go("list");
        else go("home");
        return;
      }
      if (e.target.closest('[data-action="project"]')) {
        setSpotlight(
          "工程结构",
          "Project / Module；manifests、java、res；R.java",
          ["概念对照，无页面跳转"],
          ["project", "nodes", "manifest", "res", "rjava", "architecture"],
          SCENE_CODE.project
        );
        return;
      }
      const topic = e.target.closest("[data-topic]");
      if (topic) {
        openTopic(topic.dataset.topic);
        return;
      }
      const layoutBtn = e.target.closest("[data-layout]");
      if (layoutBtn) {
        layoutTab = layoutBtn.dataset.layout;
        renderScreen();
        return;
      }
      const fragBtn = e.target.closest("[data-frag]");
      if (fragBtn && screen === "topic" && topicId === "frag") {
        const which = fragBtn.dataset.frag;
        root.querySelectorAll("[data-frag]").forEach((b) => {
          b.classList.toggle("is-on", b.dataset.frag === which);
        });
        const box = root.querySelector("[data-frag-box]");
        if (box) {
          box.innerHTML =
            which === "A"
              ? "<p>Fragment A：onCreateView inflate。添加方式：布局静态 或 运行时动态。</p>"
              : "<p>Fragment B：切换碎片不销毁 Activity；生命周期受宿主影响。</p>";
        }
        const t = currentTopic();
        setSpotlight(
          which === "A" ? "显示 Fragment A" : "切换到 Fragment B",
          "同一 Activity 内切换碎片 UI",
          ["Activity 仍 onResume", "Fragment 视图重建"],
          ["fragment", "frame", "activity", "callback"],
          t && t.code
        );
        return;
      }
    });

    root.addEventListener("change", (e) => {
      if (e.target.matches(".lab-code-toggle")) {
        showCode = e.target.checked;
        root.classList.toggle("is-show-code", showCode);
        renderCodePanel(codeOverride);
        return;
      }
      if (screen === "form") {
        setSpotlight(
          "操作表单控件",
          "Radio / CheckBox / Spinner / SeekBar 交互",
          ["onResume"],
          ["radio", "spinner", "arrayAdapter", "progress", "text"],
          SCENE_CODE.formWidgets
        );
      }
    });
  }

  function mount(container) {
    root = container;
    screen = "home";
    layoutTab = "linear";
    topicId = null;
    showCode = false;
    hit = new Set();
    codeOverride = null;
    delete root.dataset.booted;

    const dots = ALL_KP_IDS.map((id) => {
      const k = KP[id];
      return `<button type="button" class="lab-cover-dot" data-kid="${id}" title="#${k.n} ${escapeHtml(k.title)}"></button>`;
    }).join("");

    root.innerHTML = `
      <div class="lab-shell">
        <div class="lab-intro section-card">
          <h3>怎么玩</h3>
          <ul>
            <li>左侧模拟机操作；右侧显示<strong>本动作专属</strong>知识点（列表每项不同）。</li>
            <li>勾选「显示相关代码」可对照考试常写的 Java / XML。</li>
            <li>底部覆盖条：点亮全部 40 个常考概念才算玩全。</li>
          </ul>
          <label class="lab-code-switch">
            <input type="checkbox" class="lab-code-toggle" />
            显示相关实现代码（考试向）
          </label>
        </div>

        <div class="lab-cover section-card">
          <div class="lab-cover-head">
            <strong class="lab-cover-label">已点亮 0 / ${ALL_KP_IDS.length} 个常考概念</strong>
          </div>
          <div class="lab-cover-track"><i class="lab-cover-bar"></i></div>
          <div class="lab-cover-dots">${dots}</div>
        </div>

        <div class="lab-stage">
          <div class="lab-phone">
            <div class="lab-notch"></div>
            <div class="lab-status"><span>9:41</span><span>5G · 88%</span></div>
            <div class="lab-appbar">
              <button type="button" class="lab-back" hidden>‹</button>
              <span class="lab-app-title">HomeActivity</span>
            </div>
            <div class="lab-screen-body"></div>
            <div class="lab-toast" aria-live="polite"></div>
            <nav class="lab-nav">
              <button type="button" class="lab-nav-btn is-on" data-nav="home">主页</button>
              <button type="button" class="lab-nav-btn" data-nav="form">表单</button>
              <button type="button" class="lab-nav-btn" data-nav="list">列表</button>
            </nav>
          </div>

          <aside class="lab-panel">
            <div class="lab-spotlight section-card"></div>
            <div class="section-card">
              <h3>生命周期轨迹</h3>
              <ul class="lab-life"></ul>
            </div>
            <div class="section-card">
              <h3>本动作用到的知识点</h3>
              <div class="lab-chips"></div>
            </div>
            <div class="section-card lab-code-panel" hidden>
              <h3>相关实现代码</h3>
              <pre class="lab-code-pre"></pre>
            </div>
            <div class="section-card">
              <h3>操作日志</h3>
              <ul class="lab-log"></ul>
            </div>
          </aside>
        </div>
      </div>`;

    // click cover dots to preview that KP
    root.querySelector(".lab-cover-dots").addEventListener("click", (e) => {
      const dot = e.target.closest(".lab-cover-dot");
      if (!dot) return;
      const k = KP[dot.dataset.kid];
      if (!k) return;
      markHit([dot.dataset.kid]);
      setSpotlight(
        `#${k.n} ${k.title}`,
        k.text + "（从覆盖图点选预习；再到对应页面操作加深）",
        ["概念预习"],
        [dot.dataset.kid],
        `// 概念 #${k.n}：${k.title}\n// ${k.text}\n// 请到模拟机对应页面查看完整示例代码`
      );
    });

    bind();
    renderScreen();
  }

  function unmount() {
    if (toastTimer) clearTimeout(toastTimer);
    root = null;
  }

  return { mount, unmount };
})();
