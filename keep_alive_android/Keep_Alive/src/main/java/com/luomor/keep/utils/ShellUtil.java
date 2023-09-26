package com.luomor.keep.utils;

import android.content.Context;
import android.view.View;
import android.widget.Toast;

import com.topjohnwu.superuser.CallbackList;
import com.topjohnwu.superuser.Shell;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.util.List;

public class ShellUtil {
    public static String exec(String command) {

        Process process = null;
        BufferedReader reader = null;
        InputStreamReader is = null;
        DataOutputStream os = null;

        try {
            process = Runtime.getRuntime().exec("su");
            is = new InputStreamReader(process.getInputStream());
            reader = new BufferedReader(is);
            os = new DataOutputStream(process.getOutputStream());
            os.writeBytes(command + "\n");
            os.writeBytes("exit\n");
            os.flush();
            int read;
            char[] buffer = new char[4096];
            StringBuilder output = new StringBuilder();
            while ((read = reader.read(buffer)) > 0) {
                output.append(buffer, 0, read);
            }
            process.waitFor();
            return output.toString();
        } catch (IOException | InterruptedException e) {
            throw new RuntimeException(e);
        } finally {
            try {
                if (os != null) {
                    os.close();
                }

                if (reader != null) {
                    reader.close();
                }

                if (is != null) {
                    is.close();
                }

                if (process != null) {
                    process.destroy();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    /**
     *
     * @param apkPath
     * @param packageName String 包名/包名+activity名
     */
    public static void install(String apkPath, String packageName) {
        String cmd1 = "am start -n " + packageName;
        // sleep 60;
        String cmd2 = "pm install -r " + apkPath + " && ";
        String cmd = cmd2 + cmd1;
        //Runtime对象
        Runtime runtime = Runtime.getRuntime();
        try {
            Process localProcess = runtime.exec("su");
            OutputStream localOutputStream = localProcess.getOutputStream();
            DataOutputStream localDataOutputStream = new DataOutputStream(localOutputStream);
            localDataOutputStream.writeBytes(cmd);
            localDataOutputStream.flush();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void kewpieAddCron(Context context) {
        List<String> callbackList = new CallbackList<String>() {
            @Override
            public void onAddElement(String s) {
                Toast.makeText(context, s, Toast.LENGTH_SHORT).show();
            }
        };
        String absoluteScriptPath = "/sdcard/luomor/kewpie_add_cron.sh";
        String cmd = String.format("busybox ash \"%s\"", absoluteScriptPath);
        Shell.cmd(cmd).to(callbackList).submit();
    }

    public static void kewpieRemoveCron(Context context) {
        List<String> callbackList = new CallbackList<String>() {
            @Override
            public void onAddElement(String s) {
                Toast.makeText(context, s, Toast.LENGTH_SHORT).show();
            }
        };
        String absoluteScriptPath = "/sdcard/luomor/kewpie_remove_cron.sh";
        String cmd = String.format("busybox ash \"%s\"", absoluteScriptPath);
        Shell.cmd(cmd).to(callbackList).submit();
    }
}
