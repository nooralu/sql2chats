package com.example.sql2chats;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.example.sql2chats.repository")
@EntityScan("com.example.sql2chats.entity")
public class Sql2chatsApplication {

	public static void main(String[] args) {
		SpringApplication.run(Sql2chatsApplication.class, args);
	}

}
