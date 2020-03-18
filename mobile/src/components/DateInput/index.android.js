import React, { useMemo, useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, DateButton, DateText } from './styles';

export default function DateInput({ date, onChange }) {
  const [opened, setOpened] = useState(false);

  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
    [date]
  );

  const handleDateChange = (event, selectedDate) => {
    console.tron.log(selectedDate);
    onChange(selectedDate);
    setOpened(false);
  };

  return (
    <Container>
      <DateButton onPress={() => setOpened(!opened)}>
        <Icon name="event" color="#fff" size={20} />
        <DateText>{dateFormatted}</DateText>
      </DateButton>
      {opened && (
        <DateTimePicker
          value={date}
          minimumDate={new Date()}
          mode="date"
          display="spinner"
          onChange={handleDateChange}
        />
      )}
    </Container>
  );
}
