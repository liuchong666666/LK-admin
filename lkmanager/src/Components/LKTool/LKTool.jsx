class LKTool {
  //图片转为64字符串
  fileToBase64Url(file, callback) {
    //1.修改图片信息
    let src = '';
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file); //URL格式的Base64字符串以表示所读取文件的内容。
    } else {
      src = '';
    }
    //     FileReader.onloadend
    // 处理loadend事件。该事件在读取操作结束时（要么成功，要么失败）触发。

    //2.阅读器已经解析完毕,图片解析完毕后的操作
    reader.onloadend = () => {
      //       FileReader.result 只读
      // 文件的内容。该属性仅在读取操作完成后才有效，数据的格式取决于使用哪个方法来启动读取操作。
      src = reader.result;
      //回调返回
      callback && callback(src);
    };
  }

  //数据加密
}
export default LKTool;
