package br.com.raphaelpaulino.bancodesangue.service.core.web;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.lang.NonNull;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

	private final String protocol = "http://";
	
	@Value("${server.address}")
	private  String host;
	
	@Value("${frontbootstrap.server.port}")
	private Integer portaBoostrap;

	@Value("${frontangular.server.port}")
	private Integer portaAngular;

	@Override
	public void addCorsMappings(@NonNull CorsRegistry registry) {
		registry.addMapping("/**")
				.allowedMethods("GET", "POST", "HEAD")
				.allowedOrigins(
					this.protocol + this.host + ":" + this.portaBoostrap,
					this.protocol + this.host + ":" + this.portaAngular
				);
	}
}
