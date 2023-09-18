package com.luomor.keepalive;

import android.content.Context;

import io.dcloud.application.DCLoudApplicationImpl;
import io.dcloud.application.DCloudApplication;
import io.dcloud.common.DHInterface.message.ActionBus;
import io.dcloud.common.DHInterface.message.action.AppOnCreateAction;

public class LCloudApplication extends DCloudApplication {
    private static Context context;

    @Override
    public void onCreate() {
        super.onCreate();
        context = getApplicationContext();

        Thread.setDefaultUncaughtExceptionHandler(new CrashHandler());
    }

    //可以声明内部的 MyApplication 成员参数 或 在子类采用 LCloudApplication application = (LCloudApplication) getApplication();
    public static Context getContext() {
        return context;
    }
}
