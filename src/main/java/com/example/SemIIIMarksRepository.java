package com.example;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "semiiimarks", path = "semiiimarks")
public interface SemIIIMarksRepository extends PagingAndSortingRepository<SemIIIMarks, Integer> {

	// List<Exam> findByLastName(@Param("name") String name);

}