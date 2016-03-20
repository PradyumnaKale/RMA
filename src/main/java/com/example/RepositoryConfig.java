package com.example;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestMvcConfiguration;

@Configuration
public class RepositoryConfig extends RepositoryRestMvcConfiguration {
	@Override
	protected void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
		config.exposeIdsFor(Student.class);
		config.exposeIdsFor(Subject.class);
		config.exposeIdsFor(Exam.class);
		config.exposeIdsFor(Users.class);
		config.exposeIdsFor(User_roles.class);
		config.exposeIdsFor(SemIMarks.class);
		config.exposeIdsFor(SemIIMarks.class);
		config.exposeIdsFor(SemIIIMarks.class);
		config.exposeIdsFor(SemIVMarks.class);
	}
}