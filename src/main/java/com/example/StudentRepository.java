package com.example;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "student", path = "student")
public interface StudentRepository extends PagingAndSortingRepository<Student, Integer> {

	// List<Student> findByLastName(@Param("name") String name);

}
