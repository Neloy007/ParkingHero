package com.example.parkinghero.data.model

import kotlinx.serialization.Serializable

@Serializable
data class AuthResponse(
    val success: Boolean,
    val message: String,
    val data: User? = null,
    val token: String? = null
)