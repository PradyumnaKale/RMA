package com.example;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "semiimarks", path = "semiimarks")
public interface SemIIMarksRepository extends PagingAndSortingRepository<SemIIMarks, Integer> {

	// List<Exam> findByLastName(@Param("name") String name);

}