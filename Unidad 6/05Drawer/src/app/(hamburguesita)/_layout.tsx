import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import React from 'react';

export default function HamburguesitaLayout() {
	return (
		<Drawer
			screenOptions={{
				drawerStyle: { backgroundColor: '#111' },
				drawerActiveTintColor: '#fff',
				drawerInactiveTintColor: '#aaa',
			}}
		>
			<Drawer.Screen
				name="index"
				options={{
					title: 'Home',
					drawerIcon: ({ size, color }) => (
						<Ionicons name="home" size={size} color={color} />
					),
				}}
			/>
			<Drawer.Screen
				name="profile"
				options={{
					title: 'Perfil',
					drawerIcon: ({ size, color }) => (
						<Ionicons name="person" size={size} color={color} />
					),
				}}
			/>
			<Drawer.Screen
				name="settings"
				options={{
					title: 'Ajustes',
					drawerIcon: ({ size, color }) => (
						<Ionicons name="settings" size={size} color={color} />
					),
				}}
			/>
		</Drawer>
	);
}
