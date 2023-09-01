using System;
using System.IO;
using System.Web;

namespace FaviconOverrider
{
    public class IcoHandler : IHttpHandler
    {
    public void ProcessRequest(HttpContext context)
    {
        context.Response.ContentType = "image/x-icon";
        byte[] imageData = imageToByteArray(context.Server.MapPath("/gfx/favicon.png"));
        context.Response.BinaryWrite(imageData);
    }

    public bool IsReusable
    {
        get { return true; }
    }

    public byte[] imageToByteArray(string imagePath)
    {
        byte[] imageByteArray;
        using (FileStream fs = new FileStream(imagePath, FileMode.Open, FileAccess.Read))
        {
        imageByteArray = new byte[fs.Length];
        fs.Read(imageByteArray, 0, imageByteArray.Length);
        }

        return imageByteArray;
    }
    }
}