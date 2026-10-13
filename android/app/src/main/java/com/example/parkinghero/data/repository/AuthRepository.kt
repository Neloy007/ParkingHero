package com.example.parkinghero.data.repository

import com.example.parkinghero.data.model.AuthResponse
import com.example.parkinghero.data.model.LoginRequest
import com.example.parkinghero.data.model.RegisterRequest
import com.example.parkinghero.data.remote.RetrofitClient
import retrofit2.HttpException
import java.io.IOException

class AuthRepository {

    private val api = RetrofitClient.api

    suspend fun register(
        name: String,
        email: String,
        phone: String,
        password: String,
        role: String
    ): AuthResponse {
        return try {
            api.register(
                RegisterRequest(
                    name = name.trim(),
                    email = email.trim(),
                    phone = phone.trim(),
                    password = password,
                    role = role
                )
            )
        } catch (e: HttpException) {
            val errorBody = e.response()?.errorBody()?.string()

            throw Exception(
                "Registration failed (HTTP ${e.code()}): ${
                    errorBody ?: "No response body"
                }",
                e
            )
        } catch (e: IOException) {
            throw Exception(
                "Network error: Please check your internet connection.",
                e
            )
        } catch (e: Exception) {
            throw Exception(
                "Unknown error: ${e.message ?: "Something went wrong"}",
                e
            )
        }
    }

    suspend fun login(
        email: String,
        password: String
    ): AuthResponse {
        return try {
            api.login(
                LoginRequest(
                    email = email.trim(),
                    password = password
                )
            )
        } catch (e: HttpException) {
            val errorBody = e.response()?.errorBody()?.string()

            throw Exception(
                "Login failed (HTTP ${e.code()}): ${
                    errorBody ?: "No response body"
                }",
                e
            )
        } catch (e: IOException) {
            throw Exception(
                "Network error: Please check your internet connection.",
                e
            )
        } catch (e: Exception) {
            throw Exception(
                "Unknown error: ${e.message ?: "Something went wrong"}",
                e
            )
        }
    }
}

