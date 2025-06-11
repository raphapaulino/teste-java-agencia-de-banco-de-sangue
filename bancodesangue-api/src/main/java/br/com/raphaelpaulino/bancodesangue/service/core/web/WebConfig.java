package br.com.raphaelpaulino.bancodesangue.service.core.web;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.lang.NonNull;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
	
	@Value("${server.address}")
	private String host;
	
	@Value("${frontend.server.port}")
	private Integer porta;
	  
	@Override
	public void addCorsMappings(@NonNull CorsRegistry registry) {
		registry.addMapping("/**")
			.allowedMethods("GET", "POST", "HEAD")
			.allowedOrigins("http://" + this.host + ":" + this.porta);
	}
}
