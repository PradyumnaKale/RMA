package com.example;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "subject", path = "subject")
public interface SubjectRepository extends PagingAndSortingRepository<Subject, String> {

	// List<Subject> findByLastName(@Param("name") String name);

}
