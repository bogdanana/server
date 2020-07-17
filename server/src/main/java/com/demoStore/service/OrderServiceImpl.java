package com.demoStore.service;

import com.demoStore.converter.OrderConverter;
import com.demoStore.dto.OrderDto;
import com.demoStore.entity.Order;
import com.demoStore.repository.JpaOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrderServiceImpl implements OrderService{

    @Autowired
    JpaOrderRepository jpaOrderRepository;


    @Override
    public OrderDto createOrder(OrderDto orderDto) {
        return OrderConverter.entityToDto(jpaOrderRepository.save(OrderConverter.dtoToEntity(orderDto)));
    }

    @Override
    public OrderDto getOrderById(Long orderId) {
        return OrderConverter.entityToDto(jpaOrderRepository.getOne(orderId));
    }

    @Override
    public List<OrderDto> getAllOrders() {
        List<Order> orders = jpaOrderRepository.findAll();
        List<OrderDto> orderDtos = new ArrayList<>();
        for (Order order:
             orders) {
            orderDtos.add(OrderConverter.entityToDto(order));
        }
        return orderDtos;
    }
}
