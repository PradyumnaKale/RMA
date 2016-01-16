package com.example;

import java.io.Serializable;

import javax.persistence.Column;

public class MyKeyTwo implements Serializable {
	/**
	 *
	 */
	private static final long serialVersionUID = 1L;
	@Column(name = "eyear")
	int examYear;
	@Column(name = "semester")
	int semester;
}