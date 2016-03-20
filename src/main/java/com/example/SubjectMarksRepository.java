package com.example;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "subjectmarks", path = "subjectmarks")
public interface SubjectMarksRepository extends PagingAndSortingRepository<SubjectMarks, Integer> {

	// List<Exam> findByLastName(@Param("name") String name);

}