﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CommonUtilsLibrary.Models;
using System.IO;
using System.Net;

namespace CommonUtilsLibrary.Utils
{
    public class FtpUtil
    {
        public FtpUtil(FtpConPara para)
        {
            Host = para.HostName;
            UserID = para.UserID;
            Password = para.Password;
            Uri = para.Uri;
        }

        string Host { get; set; }

        string UserID { get; set; }

        string Password { get; set; }

        string Uri { get; set; }

        #region 上传文件到FTP服务器
        /// <summary>
        /// 上传文件到FTP服务器
        /// </summary>
        /// <param name="localFullPath">本地带有完整路径的文件名</param>
        /// <param name="updateProgress">报告进度的处理(第一个参数：总大小，第二个参数：当前进度)</param>
        /// <returns>是否下载成功</returns>
        public  bool FtpUploadFile(string localFullPathName, Action<int, int> updateProgress = null)
        {
            FtpWebRequest reqFTP;
            Stream stream = null;
            FtpWebResponse response = null;
            FileStream fs = null;
            FileInfo finfo = new FileInfo(localFullPathName);
            if (Host == null || Host.Trim().Length == 0)
            {
                throw new Exception("ftp上传目标服务器地址未设置！");
            }
            // Uri uri = new Uri("ftp://" + Host + "/" + finfo.Name);
            Uri uri = new Uri(Uri + finfo.Name);
            reqFTP = (FtpWebRequest)FtpWebRequest.Create(uri);
            reqFTP.KeepAlive = false;
            reqFTP.UseBinary = true;
            reqFTP.Credentials = new NetworkCredential(UserID, Password);//用户，密码
            reqFTP.Method = WebRequestMethods.Ftp.UploadFile;//向服务器发出下载请求命令
            reqFTP.ContentLength = finfo.Length;//为request指定上传文件的大小
            response = reqFTP.GetResponse() as FtpWebResponse;
            reqFTP.ContentLength = finfo.Length;
            int buffLength = 1024;
            byte[] buff = new byte[buffLength];
            int contentLen;
            fs = finfo.OpenRead();
            stream = reqFTP.GetRequestStream();
            contentLen = fs.Read(buff, 0, buffLength);
            int allbye = (int)finfo.Length;
            //更新进度  
            if (updateProgress != null)
            {
                updateProgress((int)allbye, 0);//更新进度条   
            }
            int startbye = 0;
            while (contentLen != 0)
            {
                startbye = contentLen + startbye;
                stream.Write(buff, 0, contentLen);
                //更新进度  
                if (updateProgress != null)
                {
                    updateProgress((int)allbye, (int)startbye);//更新进度条   
                }
                contentLen = fs.Read(buff, 0, buffLength);
            }
            stream.Close();
            fs.Close();
            response.Close();
            return true;
        }

        public bool FtpUploadFileForMulti(string[] localFullPathNames, Action<int, int> updateProgress = null)
        {
            FtpWebRequest reqFTP;
            Stream stream = null;
            FileStream fs = null;
            foreach (string localFullPathName in localFullPathNames)
            {
                try
                {
                    FileInfo finfo = new FileInfo(localFullPathName);
                    if (Host == null || Host.Trim().Length == 0)
                    {
                        throw new Exception("ftp上传目标服务器地址未设置！");
                    }
                    // Uri uri = new Uri("ftp://" + Host + "/" + finfo.Name);
                    Uri uri = new Uri(Uri + finfo.Name);
                    reqFTP = (FtpWebRequest)WebRequest.Create(uri);
                    reqFTP.KeepAlive = false;
                    reqFTP.UseBinary = true;
                    reqFTP.Credentials = new NetworkCredential(UserID, Password);//用户，密码
                    reqFTP.Method = WebRequestMethods.Ftp.UploadFile;//向服务器发出下载请求命令
                    reqFTP.ContentLength = finfo.Length;//为request指定上传文件的大小
                    reqFTP.ContentLength = finfo.Length;
                    int buffLength = 1024;
                    byte[] buff = new byte[buffLength];
                    int contentLen;
                    fs = finfo.OpenRead();
                    stream = reqFTP.GetRequestStream();
                    contentLen = fs.Read(buff, 0, buffLength);
                    int allbye = (int)finfo.Length;
                    //更新进度  
                    if (updateProgress != null)
                    {
                        updateProgress((int)allbye, 0);//更新进度条   
                    }
                    int startbye = 0;
                    while (contentLen != 0)
                    {
                        startbye = contentLen + startbye;
                        stream.Write(buff, 0, contentLen);
                        //更新进度  
                        if (updateProgress != null)
                        {
                            updateProgress((int)allbye, (int)startbye);//更新进度条   
                        }
                        contentLen = fs.Read(buff, 0, buffLength);
                    }
                    stream.Close();
                    fs.Close();
                }
                catch (Exception)
                {
                    LogUtils.ErrorLog("FTP上传文件失败：" + localFullPathName);
                    continue;
                }
            }
            return true;
        }

        public bool UploadFile(string localFullPathName, Action<int, int> updateProgress = null)
        {
            FtpWebRequest reqFTP;
            Stream stream = null;
            FileStream fs = null;
            FileInfo finfo = new FileInfo(localFullPathName);
            if (Host == null || Host.Trim().Length == 0)
            {
                throw new Exception("ftp上传目标服务器地址未设置！");
            }
            // Uri uri = new Uri("ftp://" + Host + "/" + finfo.Name);
            Uri uri = new Uri(Uri + finfo.Name);
            reqFTP = (FtpWebRequest)FtpWebRequest.Create(uri);
            reqFTP.KeepAlive = false;
            reqFTP.UseBinary = true;
            reqFTP.Credentials = new NetworkCredential(UserID, Password);//用户，密码
            reqFTP.Method = WebRequestMethods.Ftp.UploadFile;//向服务器发出下载请求命令
            reqFTP.ContentLength = finfo.Length;//为request指定上传文件的大小
            reqFTP.ContentLength = finfo.Length;
            int buffLength = 1024;
            byte[] buff = new byte[buffLength];
            int contentLen;
            fs = finfo.OpenRead();
            stream = reqFTP.GetRequestStream();
            contentLen = fs.Read(buff, 0, buffLength);
            int allbye = (int)finfo.Length;
            //更新进度  
            if (updateProgress != null)
            {
                updateProgress((int)allbye, 0);//更新进度条   
            }
            int startbye = 0;
            while (contentLen != 0)
            {
                startbye = contentLen + startbye;
                stream.Write(buff, 0, contentLen);
                //更新进度  
                if (updateProgress != null)
                {
                    updateProgress((int)allbye, (int)startbye);//更新进度条   
                }
                contentLen = fs.Read(buff, 0, buffLength);
            }
            stream.Close();
            fs.Close();
            return true;
        }
        /// <summary>
        /// 上传文件到FTP服务器(断点续传)
        /// </summary>
        /// <param name="localFullPath">本地文件全路径名称：C:\Users\JianKunKing\Desktop\IronPython脚本测试工具</param>
        /// <param name="remoteFilepath">远程文件所在文件夹路径</param>
        /// <param name="updateProgress">报告进度的处理(第一个参数：总大小，第二个参数：当前进度)</param>
        /// <returns></returns>       
        public bool FtpUploadBroken(string localFullPath, string remoteFilepath, Action<int, int> updateProgress = null)
        {
            if (remoteFilepath == null)
            {
                remoteFilepath = "";
            }
            string newFileName = string.Empty;
            bool success = true;
            FileInfo fileInf = new FileInfo(localFullPath);
            long allbye = (long)fileInf.Length;
            if (fileInf.Name.IndexOf("#") == -1)
            {
                newFileName = RemoveSpaces(fileInf.Name);
            }
            else
            {
                newFileName = fileInf.Name.Replace("#", "＃");
                newFileName = RemoveSpaces(newFileName);
            }
            long startfilesize = GetFileSize(newFileName, remoteFilepath);
            if (startfilesize >= allbye)
            {
                return false;
            }
            long startbye = startfilesize;
            //更新进度  
            if (updateProgress != null)
            {
                updateProgress((int)allbye, (int)startfilesize);//更新进度条   
            }

            string uri;
            if (remoteFilepath.Length == 0)
            {
                uri = "ftp://" + Host + "/" + newFileName;
            }
            else
            {
                uri = "ftp://" + Host + "/" + remoteFilepath + "/" + newFileName;
            }
            FtpWebRequest reqFTP;
            // 根据uri创建FtpWebRequest对象 
            reqFTP = (FtpWebRequest)FtpWebRequest.Create(new Uri(uri));
            // ftp用户名和密码 
            reqFTP.Credentials = new NetworkCredential(UserID, Password);
            // 默认为true，连接不会被关闭 
            // 在一个命令之后被执行 
            reqFTP.KeepAlive = false;
            // 指定执行什么命令 
            reqFTP.Method = WebRequestMethods.Ftp.AppendFile;
            // 指定数据传输类型 
            reqFTP.UseBinary = true;
            // 上传文件时通知服务器文件的大小 
            reqFTP.ContentLength = fileInf.Length;
            int buffLength = 2048;// 缓冲大小设置为2kb 
            byte[] buff = new byte[buffLength];
            // 打开一个文件流 (System.IO.FileStream) 去读上传的文件 
            FileStream fs = fileInf.OpenRead();
            Stream strm = null;
            try
            {
                // 把上传的文件写入流 
                strm = reqFTP.GetRequestStream();
                // 每次读文件流的2kb   
                fs.Seek(startfilesize, 0);
                int contentLen = fs.Read(buff, 0, buffLength);
                // 流内容没有结束 
                while (contentLen != 0)
                {
                    // 把内容从file stream 写入 upload stream 
                    strm.Write(buff, 0, contentLen);
                    contentLen = fs.Read(buff, 0, buffLength);
                    startbye += contentLen;
                    //更新进度  
                    if (updateProgress != null)
                    {
                        updateProgress((int)allbye, (int)startbye);//更新进度条   
                    }
                }
                // 关闭两个流 
                strm.Close();
                fs.Close();
            }
            catch
            {
                success = false;
                throw;
            }
            finally
            {
                if (fs != null)
                {
                    fs.Close();
                }
                if (strm != null)
                {
                    strm.Close();
                }
            }
            return success;
        }

        /// <summary>
        /// 去除空格
        /// </summary>
        /// <param name="str"></param>
        /// <returns></returns>
        private  string RemoveSpaces(string str)
        {
            string a = "";
            CharEnumerator CEnumerator = str.GetEnumerator();
            while (CEnumerator.MoveNext())
            {
                byte[] array = new byte[1];
                array = System.Text.Encoding.ASCII.GetBytes(CEnumerator.Current.ToString());
                int asciicode = (short)(array[0]);
                if (asciicode != 32)
                {
                    a += CEnumerator.Current.ToString();
                }
            }
            string sdate = System.DateTime.Now.Year.ToString() + System.DateTime.Now.Month.ToString() + System.DateTime.Now.Day.ToString() + System.DateTime.Now.Hour.ToString()
                + System.DateTime.Now.Minute.ToString() + System.DateTime.Now.Second.ToString() + System.DateTime.Now.Millisecond.ToString();
            return a.Split('.')[a.Split('.').Length - 2] + "." + a.Split('.')[a.Split('.').Length - 1];
        }
        /// <summary>
        /// 获取已上传文件大小
        /// </summary>
        /// <param name="filename">文件名称</param>
        /// <param name="path">服务器文件路径</param>
        /// <returns></returns>
        public  long GetFileSize(string filename, string remoteFilepath)
        {
            long filesize = 0;
            try
            {
                FtpWebRequest reqFTP;
                FileInfo fi = new FileInfo(filename);
                string uri;
                if (remoteFilepath.Length == 0)
                {
                    uri = "ftp://" + Host + "/" + fi.Name;
                }
                else
                {
                    uri = "ftp://" + Host + "/" + remoteFilepath + "/" + fi.Name;
                }
                reqFTP = (FtpWebRequest)FtpWebRequest.Create(uri);
                reqFTP.KeepAlive = false;
                reqFTP.UseBinary = true;
                reqFTP.Credentials = new NetworkCredential(UserID, Password);//用户，密码
                reqFTP.Method = WebRequestMethods.Ftp.GetFileSize;
                FtpWebResponse response = (FtpWebResponse)reqFTP.GetResponse();
                filesize = response.ContentLength;
                return filesize;
            }
            catch
            {
                return 0;
            }
        }

        #endregion

    }
}
