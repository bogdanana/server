package com.demoStore.service;

import com.demoStore.dto.OrderDto;

import java.util.List;

public interface OrderService {
    OrderDto createOrder(OrderDto orderDto);
    OrderDto getOrderById(Long orderId);
    List<OrderDto> getAllOrders();
}
