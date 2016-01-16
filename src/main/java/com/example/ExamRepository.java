package com.example;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "exam", path = "exam")
public interface ExamRepository extends PagingAndSortingRepository<Exam, Integer> {

	// List<Exam> findByLastName(@Param("name") String name);

}
