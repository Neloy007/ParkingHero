package com.example.parkinghero

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.example.parkinghero.data.local.SessionManager
import com.example.parkinghero.ui.screens.auth.LoginScreen
import com.example.parkinghero.ui.screens.auth.RegisterScreen
import com.example.parkinghero.ui.screens.auth.WelcomeScreen
import com.example.parkinghero.ui.screens.driver.DriverDashboardScreen
import com.example.parkinghero.ui.screens.owner.OwnerDashboardScreen
import com.example.parkinghero.ui.theme.ParkingHeroTheme

class MainActivity : ComponentActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContent {
            ParkingHeroTheme {

                val navController = rememberNavController()

                val sessionManager = remember {
                    SessionManager(this@MainActivity)
                }

                var startDestination by remember {
                    mutableStateOf<String?>(null)
                }

                LaunchedEffect(Unit) {
                    startDestination = if (sessionManager.isLoggedIn()) {
                        when (sessionManager.getRole()) {
                            "DRIVER" -> "driver"
                            "OWNER" -> "owner"
                            else -> "welcome"
                        }
                    } else {
                        "welcome"
                    }
                }

                startDestination?.let { destination ->

                    NavHost(
                        navController = navController,
                        startDestination = destination
                    ) {

                        composable("welcome") {
                            WelcomeScreen(
                                onLoginClick = {
                                    navController.navigate("login")
                                },
                                onRegisterClick = {
                                    navController.navigate("register")
                                }
                            )
                        }

                        composable("login") {
                            LoginScreen(
                                onBackClick = {
                                    navController.popBackStack()
                                },
                                onLoginSuccess = { role ->

                                    when (role) {

                                        "DRIVER" -> {
                                            navController.navigate("driver") {
                                                popUpTo("login") {
                                                    inclusive = true
                                                }
                                            }
                                        }

                                        "OWNER" -> {
                                            navController.navigate("owner") {
                                                popUpTo("login") {
                                                    inclusive = true
                                                }
                                            }
                                        }
                                    }
                                },
                                onRegisterClick = {
                                    navController.navigate("register")
                                }
                            )
                        }

                        composable("register") {
                            RegisterScreen(
                                onBackClick = {
                                    navController.popBackStack()
                                },
                                onRegisterSuccess = {
                                    navController.navigate("login") {
                                        popUpTo("register") {
                                            inclusive = true
                                        }
                                    }
                                },
                                onLoginClick = {
                                    navController.navigate("login")
                                }
                            )
                        }

                        composable("driver") {
                            DriverDashboardScreen()
                        }

                        composable("owner") {
                            OwnerDashboardScreen()
                        }
                    }
                }
            }
        }
    }

}
