package com.example;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "semIVmarks", path = "semIVmarks")
public interface SemIVMarksRepository extends PagingAndSortingRepository<SemIVMarks, Integer> {

	// List<Exam> findByLastName(@Param("name") String name);

}