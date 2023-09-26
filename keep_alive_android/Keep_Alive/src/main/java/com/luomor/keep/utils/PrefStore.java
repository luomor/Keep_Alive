package com.luomor.keep.utils;

import android.content.Context;
import android.content.SharedPreferences;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.res.Configuration;
import android.os.Environment;

import java.io.File;
import java.util.Locale;
import java.util.Objects;

public class PrefStore {
    public static String getFilesDir(Context c) {
        return c.getFilesDir().getAbsolutePath();
    }
}
