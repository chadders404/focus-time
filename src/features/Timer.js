import React, { useState } from 'react';
import { View, StyleSheet, Text, Platform, Vibration } from 'react-native';
import { useKeepAwake } from "expo-keep-awake";
import { ProgressBar } from 'react-native-paper';
import { Countdown } from '../Components/Countdown';
import { RoundedButton } from '../Components/RoundedButton';
import { Timing } from './Timing';

import { spacing, fontSizes } from '../utils/sizes';
import { colors } from '../utils/colors';

export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);
  const ONE_SECOND_IN_MS = 1000;

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  };

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
  ];

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={(progress) => setProgress(progress)}
          onEnd={onEnd}
        />
        <View style={{ paddingTop: spacing.xxl }}>
          <Text style={styles.title}>Focus on:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
          <Text style={styles.task}>Until the timer reaches 00:00</Text>
        </View>
      </View>
      <View style={{ paddingTop: spacing.xxl }}>
        <ProgressBar
          progress={progress}
          color={colors.purple}
          style={{
            marginLeft: spacing.lg,
            marginRight: spacing.lg,
            height: spacing.sm,
          }}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        )}
        {isStarted && (
          <RoundedButton title="| |" onPress={() => setIsStarted(false)} />
        )}
      </View>
      <View style={styles.clearSubjectWrapper}>
        <RoundedButton size={60} title="❌" onPress={clearSubject} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearSubjectWrapper: {
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'red',
  },
  title: {
    color: colors.greyBlue,
    fontWeight: 'bold',
    fontSize: fontSizes.lg,
    textAlign: 'center',
  },
  task: {
    color: colors.greyBlue,
    textAlign: 'center',
    padding: spacing.sm,
  },
});
