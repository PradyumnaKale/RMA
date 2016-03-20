package com.example;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "semimarks", path = "semimarks")
public interface SemIMarksRepository extends PagingAndSortingRepository<SemIMarks, Integer> {

	// List<Exam> findByLastName(@Param("name") String name);

}