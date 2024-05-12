const homeVueStyle = StyleSheet.create({
  header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: PADDING.horizontal,
      paddingVertical: PADDING.vertical,
  },
  userImg: {
      width: 50,
      height: 50,
      borderRadius: 50 / 2,
  },
  userName: {
      fontSize: 16,
  },
  fonctionnaliteIcone: {
      width: 200,
      height: 150,
      resizeMode: 'contain',
      marginLeft: 20,
  },
  fonctionnaliteText: {
      marginTop: 5,
      marginLeft: 20,
      fontSize: 12,
      textAlign: 'center',
  },
});

export default homeVueStyle;
