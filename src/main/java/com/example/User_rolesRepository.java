
package com.example;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "user_roles", path = "user_roles")
public interface User_rolesRepository extends PagingAndSortingRepository<User_roles, String> {

	// List<Subject> findByLastName(@Param("name") String name);

}
