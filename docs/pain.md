# 痛点解决

开发这款输入法的主要原因是，感觉好像没有专门适配五笔的输入法。

玫枫五笔主要解决的问题如下：


### 1. 调整词序

同编码下的词可以改顺序，各端都可以拖动排序。  
macOS 和 Windows 默认是 <kbd>⌃</kbd><kbd>⌥</kbd><kbd>0</kbd> / <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>0</kbd>，可在「输入习惯」页的「排序」里单独修改。

iOS 和 Android 在输入界面有对应按钮。

### 2. 快捷键自造词

不用打开词库文件再部署，编码规则各端相同。

Mac 上默认是 <kbd>⌃</kbd><kbd>⌥</kbd><kbd>N</kbd>（Windows 为 <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>N</kbd>）；  
iOS 在键盘里直接造。  

选中的文字或刚上屏的词会填进去，写完马上能打。

### 3. 词库自动同步

只同步个人词库 `wubi86_jidian_user.dict.yaml`（约 40 000 字）。

账号与付费说明见 [注册与付费](/guide/register)（输入法免费，付费仅用于词库云端同步）。

### 4. 日期、时间和星期

输入 <kbd>date</kbd>、<kbd>time</kbd>、<kbd>week</kbd>，候选来自当时的系统时间。   
格式从「2026-10-09」到时间戳都有。

### 5. 拼音反查

不会拆的字，用 <kbd>z</kbd> 加拼音反查。例如不知道「玫」时打 <kbd>zmei</kbd>，再从候选里选。
