# dataset.py
import os
from PIL import Image
from torch.utils.data import Dataset
import torchvision.transforms as transforms

# Define your transforms here
train_transforms = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.RandomHorizontalFlip(p=0.5),
    transforms.RandomRotation(degrees=15),
    transforms.ColorJitter(brightness=0.2, contrast=0.2), 
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
])

val_transforms = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
])

# Define your class here
class IlluminationDataset(Dataset):
    def __init__(self, dataframe, img_dir, transform=None):
        self.df = dataframe.reset_index(drop=True)
        self.img_dir = img_dir
        self.transform = transform
        self.label_col = 'label' if 'label' in self.df.columns else ('Label' if 'Label' in self.df.columns else None)

    def __len__(self):
        return len(self.df)

    def __getitem__(self, idx):
        img_id = str(self.df.iloc[idx]['id'])
        if not img_id.endswith('.png'):
            img_id = f"{img_id}.png"
            
        img_path = os.path.join(self.img_dir, img_id)
        image = Image.open(img_path).convert('RGB')
        
        if self.transform:
            image = self.transform(image)
            
        if self.label_col is not None:
            label = int(self.df.iloc[idx][self.label_col])
            return image, label
        else:
            return image, img_id


    