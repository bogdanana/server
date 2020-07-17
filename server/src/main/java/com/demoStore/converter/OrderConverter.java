package com.demoStore.converter;

import com.demoStore.dto.OrderDto;
import com.demoStore.entity.Order;

public class OrderConverter {

    public static Order dtoToEntity(OrderDto orderDto){
        Order order = new Order();
        order.setId(orderDto.getId());
        order.setName(orderDto.getName());
        order.setPhone(orderDto.getPhone());
        order.setDepartment(orderDto.getDepartment());
        return order;
    }

    public static OrderDto entityToDto(Order order){
        OrderDto orderDto = new OrderDto();
        orderDto.setId(order.getId());
        orderDto.setName(order.getName());
        orderDto.setPhone(order.getPhone());
        orderDto.setDepartment(order.getDepartment());
        return orderDto;
    }
}
