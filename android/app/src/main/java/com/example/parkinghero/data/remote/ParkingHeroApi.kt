package com.example.parkinghero.data.remote

import com.example.parkinghero.data.model.AuthResponse
import com.example.parkinghero.data.model.HealthResponse
import com.example.parkinghero.data.model.LoginRequest
import com.example.parkinghero.data.model.RegisterRequest
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.POST

interface ParkingHeroApi {

    @GET("api/health")
    suspend fun healthCheck(): HealthResponse

    @POST("api/auth/register")
    suspend fun register(
        @Body request: RegisterRequest
    ): AuthResponse

    @POST("api/auth/login")
    suspend fun login(
        @Body request: LoginRequest
    ): AuthResponse
}