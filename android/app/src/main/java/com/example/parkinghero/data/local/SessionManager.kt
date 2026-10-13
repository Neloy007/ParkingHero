package com.example.parkinghero.data.local


import android.content.Context

class SessionManager(context: Context) {

    private val preferences = context.getSharedPreferences(
        "parkinghero_session",
        Context.MODE_PRIVATE
    )

    fun saveSession(
        userId: String,
        role: String,
        token: String
    ) {
        preferences.edit()
            .putString("user_id", userId)
            .putString("role", role)
            .putString("token", token)
            .apply()
    }

    fun getUserId(): String? {
        return preferences.getString("user_id", null)
    }

    fun getRole(): String? {
        return preferences.getString("role", null)
    }

    fun getToken(): String? {
        return preferences.getString("token", null)
    }

    fun isLoggedIn(): Boolean {
        return !getToken().isNullOrBlank()
    }

    fun clearSession() {
        preferences.edit().clear().apply()
    }
}
