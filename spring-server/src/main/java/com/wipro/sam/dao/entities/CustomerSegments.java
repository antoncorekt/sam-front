package com.wipro.sam.dao.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author Anton Kozlovskyi
 * @date 06 Sep 2019
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "CUSTOMER_SEGMENTS")
public class CustomerSegments {

    @Id
    @Column(name = "CSTRADEREF")
    private  String name;

    @Column(name = "SEGM_CATEGORY")
    private  String category;

    @Column(name = "ENTRY_DATE")
    private  String data;

}
