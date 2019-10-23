package com.wipro.sam.dao.service;

import com.wipro.sam.dao.repository.CustomerSegmentsRepository;
import io.swagger.model.Segment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

/**
 * @author Anton Kozlovskyi
 * @date 06 Sep 2019
 */
@Component
public class CustomerSegmentsService {

    @Autowired
    private CustomerSegmentsRepository customerSegmentsRepository;

    public List<Segment> getAllSegments(){
        return StreamSupport.stream(customerSegmentsRepository.findAll().spliterator(), false)
                .map(x -> Segment.builder()
                        .csTradeRef(x.getName())
                        .csType(0)
                        .build())
                .collect(Collectors.toList());
    }

}
