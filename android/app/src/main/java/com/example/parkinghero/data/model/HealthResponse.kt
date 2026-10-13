package com.example.parkinghero.data.model

import kotlinx.serialization.Serializable

@Serializable
data class HealthResponse(
    val success: Boolean,
    val message: String
)