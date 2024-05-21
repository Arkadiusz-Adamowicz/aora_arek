import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Bookmark = () => {
  return (
    <SafeAreaView className=' bg-primary h-full'>
      <View>
        <Text className='my-6 px-4 space-y-6 text-2xl text-white font-psemibold'>
          Bookmark
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Bookmark;
