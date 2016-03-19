package com.example;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "semtotal", path = "semtotal")
public interface StudentSemTotalRepository extends PagingAndSortingRepository<StudentSemTotal, Integer> {

	// List<Exam> findByLastName(@Param("name") String name);

}