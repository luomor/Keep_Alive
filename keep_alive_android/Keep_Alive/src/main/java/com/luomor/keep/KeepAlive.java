package com.luomor.keep;

import android.app.Activity;
import android.content.Intent;
import android.util.Log;

import androidx.work.OneTimeWorkRequest;
import androidx.work.WorkManager;

import com.alibaba.fastjson.JSONObject;
import com.luomor.keep.receiver.OnePxReceiver;
import com.luomor.keep.service.ForegroundService;
import com.luomor.keep.service.KeepAliveJobService;
import com.luomor.keep.utils.ShellUtil;
import com.luomor.keep.worker.KeepLiveWork;

import org.json.JSONException;

import java.util.Map;
import java.util.concurrent.TimeUnit;

import io.dcloud.feature.uniapp.annotation.UniJSMethod;
import io.dcloud.feature.uniapp.bridge.UniJSCallback;
import io.dcloud.feature.uniapp.common.UniModule;

public class KeepAlive extends UniModule {

    String TAG = "KEEP_ALIVE";

    @UniJSMethod(uiThread = true)
    public void start(JSONObject options, UniJSCallback callback) throws JSONException {
        try {
            Log.e(TAG, "start--" + options);
            if (mUniSDKInstance != null && mUniSDKInstance.getContext() instanceof Activity) {
                Intent intent = new Intent(mUniSDKInstance.getContext(), ForegroundService.class);
                intent.putExtra("title", options.getString("title"));
                intent.putExtra("text", options.getString("text"));
                // 开启前台通知服务
                mUniSDKInstance.getContext().startService(intent);

                // 开启一像素服务
                if (options.containsKey("onePxEnabled") && options.getBoolean("onePxEnabled")) {
                    OnePxReceiver.register1pxReceiver(mUniSDKInstance.getContext());
                }

                // 添加任务
                if (options.containsKey("workerManager") && options.getBoolean("workerManager")) {
                    OneTimeWorkRequest oneTimeWorkRequest = new OneTimeWorkRequest
                            .Builder(KeepLiveWork.class)
                            .setInitialDelay(10, TimeUnit.SECONDS)
                            .build();
                    WorkManager.getInstance(mUniSDKInstance.getContext()).enqueue(oneTimeWorkRequest);
                }
            }
            if (callback != null) {
                JSONObject data = new JSONObject();
                data.put("code", 1);
                callback.invoke(data);
                //callback.invokeAndKeepAlive(data);
            }
        } catch (Exception e) {
            if (callback != null) {
                JSONObject data = new JSONObject();
                data.put("code", 2);
                data.put("err", e.getMessage());
                callback.invoke(data);
                //callback.invokeAndKeepAlive(data);
            }
        }
    }

    @UniJSMethod(uiThread = false)
    public JSONObject destroy() {
        if (mUniSDKInstance != null && mUniSDKInstance.getContext() instanceof Activity) {
            Intent intent = new Intent(mUniSDKInstance.getContext(), ForegroundService.class);
            mUniSDKInstance.getContext().stopService(intent);

            OnePxReceiver.unregister1pxReceiver(mUniSDKInstance.getContext());
            KeepAliveJobService.stopJob(mUniSDKInstance.getContext());
        }
        JSONObject data = new JSONObject();
        data.put("code", 0);
        return data;
    }

    @UniJSMethod(uiThread = true)
    public void addKewpie(JSONObject options, UniJSCallback callback) throws JSONException {
        Log.i(TAG, "addKewpie");
        ShellUtil.kewpieAddCron(mUniSDKInstance.getContext(), callback);
    }

    @UniJSMethod(uiThread = true)
    public void removeKewpie(JSONObject options, UniJSCallback callback) throws JSONException {
        Log.i(TAG, "removeKewpie");
        ShellUtil.kewpieRemoveCron(mUniSDKInstance.getContext(), callback);
    }

    @UniJSMethod(uiThread = false)
    public JSONObject crash() {
        Map map = null;
        map.put("test", "test");
        JSONObject data = new JSONObject();
        data.put("code", 0);
        return data;
    }
}
