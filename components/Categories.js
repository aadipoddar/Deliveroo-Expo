import { View, Text, ScrollView } from 'react-native'
import CategoryCard from './CategoryCard'

const Categories = () => {
    return (
        <ScrollView
            horizontal
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10
            }}
        >
            {/* Categories Card */}

            <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Testing1' />
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Testing2' />
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Testing3' />
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Testing4' />
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Testing5' />
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Testing6' />
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Testing7' />
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Testing8' />
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Testing9' />

        </ScrollView>
    )
}

export default Categories