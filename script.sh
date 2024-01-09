
cd src/assets/icons
files=($(ls))
for file in "${files[@]}"; do
  svgo "$file"
done

